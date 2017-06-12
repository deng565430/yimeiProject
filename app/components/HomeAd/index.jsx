import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        return (
            <div>
                <ul id="homeAd">
                   <li className={this.state.index === 0 ? 'selected' : ''} onClick={this.selectAll.bind(this)}>全部项目<i className="icon-pulldown"></i></li>
                   <li className={this.state.index === 1 ? 'selected' : ''} onClick={this.selectPart.bind(this)}>智能排序<i className="icon-pulldown"></i></li>
                </ul>
            </div>
        )
    }
    selectAll() {
        this.setState({
            index:0
        })
    }
    selectPart() {
        this.setState({
            index:1
        })
    }
}

export default HomeAd