import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star'
import ActivityItem from './ActivityItem'
import { Link } from 'react-router'

import './style.less'

class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="list-item clear-fix">
                <Link to={'/detail/' + data.hospitalId}>
                    <div className="list-item-top">
                        <div className="item-img-container float-left">
                        <img src={data.hospital_logo} alt={data.hospital_name}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{data.hospital_name}</h3>
                            <span className="float-right"><i className="icon-privilege"></i></span>
                        </div>
                         <p className="item-sub-title">
                            <Star star={Number(data.kokei)} /> 
                            <span> {data.kokei}</span>
                            <span> {data.case_num}个案例</span>
                        </p>
                        <p className="item-sub-title">
                            {data.doctor_num}名认证医生
                        </p>
                    </div>     
                    </div>
                </Link>
                    <div className="list-item-bottom">
                        {
                            data.activityItem.length
                            ? data.activityItem.map((item, index) => {
                                return <ActivityItem key={item.id} data={item} id={data.hospitalId}/>
                            })
                            : ''
                        }
                    </div>
            </div>
        )
    }
}

export default ListItem