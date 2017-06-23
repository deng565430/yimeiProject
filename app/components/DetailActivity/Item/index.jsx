import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="activity-item">
                 <div className="activity-item-left">
                   <img src={data.logo} alt={data.item_name}/>
                 </div>
                 <div className="activity-item-right">
                   <div>
                     <p><span>【{data.item_name}】</span>{data.title}</p>
                   </div>
                   <div>￥{data.curPrice} <span>￥{data.origPrice}</span></div>
                   <div>
                     <p>已售出： <span>{data.sold}</span></p>
                   </div>
                 </div>
            </div>
        )
    }
}

export default Item