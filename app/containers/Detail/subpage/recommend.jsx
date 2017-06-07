import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ComponentsRecommend from '../../../components/DetailRecommend'

import './style.less'

class Recommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
          <div>
            <ComponentsRecommend data={data} />
          </div>
        )
    }
}

export default Recommend