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
          <div className="detail-feature">
            <div className="feature-top"> <i className="icon-addr"></i>{data.addr}</div>
            <div className="feature-middle"> <i className="icon-feature "></i> 特色</div>
            <div className="feature-buttom">{data.feature}</div>
          </div>
        )
    }
}

export default Feature