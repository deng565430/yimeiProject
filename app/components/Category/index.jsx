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
            index: 2,
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
                            <Link to="/search/yanbu"><li className="float-left yanbu">眼部</li></Link>
                            <Link to="/search/bibu"><li className="float-left bibu">鼻部</li></Link>
                            <Link to="/search/meitisuxing"><li className="float-left meitisuxing">美体塑性</li></Link>
                            <Link to="/search/mianbulunkuo"><li className="float-left mianbulunkuo">面部轮廓</li></Link>
                            <Link to="/search/xiongbu"><li className="float-left xiongbu">胸部</li></Link>
                            <Link to="/search/jiguangtuomao"><li className="float-left jiguangtuomao">激光脱毛</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/pifumeirong"><li className="float-left pifumeirong">皮肤美容</li></Link>
                            <Link to="/search/banyongjiu"><li className="float-left banyongjiu">半永久</li></Link>
                            <Link to="/search/zhifangtianchong"><li className="float-left zhifangtianchong">脂肪填充</li></Link>
                            <Link to="/search/maofazhongzhi"><li className="float-left maofazhongzhi">毛发种植</li></Link>
                            <Link to="/search/kouqiang"><li className="float-left kouqiang">口腔</li></Link>
                            <Link to="/search/kangshuailao"><li className="float-left kangshuailao">抗衰老</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 || this.state.index === 2? "selected" : ''}></li>
                        <li className={this.state.index === 1 || this.state.index === 3? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category