import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.less'

class ActivityItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const id = this.props.id
        return (
            <Link to={'/activity/' + id + '/' + data.id}>
               <div className="item-price-container clear-fix">
                    <span className="price float-left"><i className="icon-feature "></i> {data.itemname}</span>
                    <span className="icon-ico-unfold  float-right icon-float"></span>
                </div>
            </Link>
        )
    }
}

export default ActivityItem