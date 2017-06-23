import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class DetailRecommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: ['/doctor/1', '/doctor/1', '/doctor/1', '/doctor/1', '/doctor/1']
        }
    }
    render() {
        const data = this.props.data
        const id = this.props.id
        return (
          <div className="detail-recommend">
                <div className="detail-recommend-doctor">
                    <i className="icon-doctor"></i> 推荐医生
                </div>
                <div className="parent-recommend">
                   <Item data={data} id={id}/>
                </div>
          </div>
        )
    }
}

export default DetailRecommend