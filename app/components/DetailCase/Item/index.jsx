import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Carousel from '../../Carousel'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: ['/case/1', '/case/1', '/case/1', '/case/1', '/case/1']
        }
    }
    render() {
        return (
           <div className="detail-case-list">
             <Carousel data={this.state.data} />
             <p><i className="icon-sign"></i> 鼻综合，下巴整形</p>
          </div>
        )
    }
}

export default Item