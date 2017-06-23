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
        const id = this.props.id
        return (
          <div>
               {
                    this.props.data 
                    ?  <ComponentsRecommend data={data} id={id}/>
                    : ''
               }
          </div>
        )
    }
}

export default Recommend