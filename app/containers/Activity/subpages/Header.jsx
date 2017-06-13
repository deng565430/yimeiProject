import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="activity-header">
                <div className="activity-header-top">
                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                </div>
                <div className="activity-header-city">
                    <span> <i className="icon-activity"> </i> ￥1280 </span>
                    <span> ￥6800 </span>
                    <span className="float-right"> 上海市 </span>
                </div>
                <div className="activity-header-desc">
                    <h3>玻尿酸垫下巴</h3>
                    <p>有92人报名</p>
                    <span><i className="icon-draw" style={{color: 'red'}}></i> 随时退</span>
                    <span><i className="icon-draw" style={{color: 'red'}}></i> 专业认证</span>
                </div>
                <div className="activity-header-img activity-header-top">
                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                </div>
                <div className="activity-header-addr">
                    <div className="activity-header-addr-top">
                        <div></div>
                        <div>
                            <h4>上海水立方医院</h4>
                            <p>上海长宁区999号</p>
                        </div>
                    </div>
                    <div className="activity-header-addr-middle">
                        <span><i className="icon-hospital"></i> 医院主页</span>
                        <span><i className="icon-service"></i> 在线客服</span>
                    </div>
                    <div>
                        <p>主治医师： 王*医师</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header