import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <ul id="homeAd">
                   <li>全部项目</li>
                   <li>智能排序</li>
                </ul>
            </div>
        )
    }
}

export default HomeAd