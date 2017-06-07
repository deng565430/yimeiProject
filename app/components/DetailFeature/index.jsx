import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Feature extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        return (
          <div>
            <div>{data.addr}</div>
            <div>特色</div>
            <div>{data.feature}</div>
          </div>
        )
    }
}

export default Feature