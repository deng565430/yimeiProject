import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ComponentsDetailActivity from '../../../components/DetailActivity'

import './style.less'

class Activity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const id = this.props.id
        return (
          <div>
                <ComponentsDetailActivity data={data} id={id}/>
          </div>
        )
    }
}

export default Activity