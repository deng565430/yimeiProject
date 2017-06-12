import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'
import Carousel from '../Carousel'

import './style.less'

class DetailRecommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        console.log(this.props.data)
        return (
          <div className="detail-recommend">
                <div className="detail-recommend-doctor">
                    <i className="icon-doctor"></i> 推荐医生
                </div>
                <div className="parent-recommend">
                   <Carousel />
                </div>
          </div>
        )
    }
}

export default DetailRecommend