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
        const data = this.props.data;
        const id = this.props.id
        return (
          <div>
            {
                this.props.data
                ?   <ComponentsDetailCase data={data} id={id}/>
                : ''
            }
          </div>
        )
    }
}

export default Case