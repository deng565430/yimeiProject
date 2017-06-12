import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class DetailCase extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
           <div className="detail-case">
             <div className="detail-case-all">整容案例</div>
             <Item />
          </div>
        )
    }
}

export default DetailCase