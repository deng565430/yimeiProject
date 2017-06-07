import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ComponentsDetailCase from '../../../components/DetailCase'

import './style.less'

class Case extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div>
                <ComponentsDetailCase />
          </div>
        )
    }
}

export default Case