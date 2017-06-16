import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

import './style.less'

class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 5000,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/jingdian"><li className="float-left jingdian">眼部</li></Link>
                            <Link to="/search/ktv"><li className="float-left ktv">鼻部</li></Link>
                            <Link to="/search/gouwu"><li className="float-left gouwu">美体塑性</li></Link>
                            <Link to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">皮肤美容</li></Link>
                            <Link to="/search/jianshenyundong"><li className="float-left jianshenyundong">面部轮廓</li></Link>
                            <Link to="/search/meifa"><li className="float-left meifa">胸部</li></Link>
                            <Link to="/search/qinzi"><li className="float-left qinzi">激光脱毛</li></Link>
                            <Link to="/search/xiaochikuaican"><li className="float-left xiaochikuaican">毛发种植</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/meishi"><li className="float-left meishi">眼部</li></Link>
                            <Link to="/search/dianying"><li className="float-left dianying">眼部</li></Link>
                            <Link to="/search/jiudian"><li className="float-left jiudian">眼部</li></Link>
                            <Link to="/search/xuixianyule"><li className="float-left xuixianyule">眼部</li></Link>
                            <Link to="/search/waimai"><li className="float-left waimai">眼部</li></Link>
                            <Link to="/search/huoguo"><li className="float-left huoguo">眼部</li></Link>
                            <Link to="/search/liren"><li className="float-left liren">眼部</li></Link>
                            <Link to="/search/dujiachuxing"><li className="float-left dujiachuxing">眼部</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/ribencai"><li className="float-left ribencai">眼部</li></Link>
                            <Link to="/search/spa"><li className="float-left SPA">眼部</li></Link>
                            <Link to="/search/jiehun"><li className="float-left jiehun">眼部</li></Link>
                            <Link to="/search/xuexipeixun"><li className="float-left xuexipeixun">眼部</li></Link>
                            <Link to="/search/xican"><li className="float-left xican">眼部</li></Link>
                            <Link to="/search/huochejipiao"><li className="float-left huochejipiao">眼部</li></Link>
                            <Link to="/search/shaokao"><li className="float-left shaokao">眼部</li></Link>
                            <Link to="/search/jiazhuang"><li className="float-left jiazhuang">眼部</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category