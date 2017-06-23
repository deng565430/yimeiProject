var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包

// 定义地址
// var ROOT_PATH = path.resolve(__dirname);
// var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
// var APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
// var BUILD_PATH = path.resolve(ROOT_PATH, 'pxq/dist'); //发布文件所存放的目录/pxq/dist/前面加/报错？



module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [ 
      'react', 
      'react-dom', 
      'react-redux', 
      'react-router', 
      'redux', 
      'es6-promise', 
      'whatwg-fetch', 
      'immutable'
    ]
  },
  output: {
    path: __dirname + "/build",  //编译好的文件，在服务器的路径,域名会自动添加到前面
    filename: "[name].[chunkhash:8].js",  //编译后的文件名字
    publicPath: './',
    chunkFilename: '[name].[chunkhash:5].min.js',
  },

  resolve:{
      extensions:['', '.js', '.jsx', '.less', '.scss', '.css']
  },

  module: {
    loaders: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
        { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
        { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
        { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=8192&name=images/[hash:8].[name].[ext]' },
        { test:/\.(woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=fonts/[name].[ext]'} //注意后面那个limit的参数，当图片大小小于这个限制的时候，会自动启用base64编码图
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("SofAiyiliStaticResource"),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.tmpl.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        }
    }),
    
    // 分离CSS和JS文件
    new ExtractTextPlugin('[name].[chunkhash:8].css'), 
    
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ]
}