import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="activity-buy">
              <div>
                <span> ￥1280</span>
                <span> ￥6000</span>
              </div>
              <div>
                <button type="button">立即抢购</button>
              </div>
            </div>
        )
    }
}

export default Buy