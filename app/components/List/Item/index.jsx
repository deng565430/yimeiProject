import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../Star'
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
                <Link to={'/detail/' + data.id}>
                    <div className="list-item-top">
                        <div className="item-img-container float-left">
                        <img src={data.img} alt={data.title}/>
                    </div>
                    <div className="item-content">
                        <div className="item-title-container clear-fix">
                            <h3 className="float-left">{data.title}</h3>
                            <span className="float-right"><i className="icon-privilege"></i></span>
                        </div>
                         <p className="item-sub-title">
                            <Star star={4} /> 
                            <span> 4.8</span>
                            <span> 220个案例</span>
                        </p>
                        <p className="item-sub-title">
                            3名认证医生
                        </p>
                    </div>     
                    </div>
                </Link>
                <div className="list-item-bottom">
                    <div className="item-price-container clear-fix">
                        <span className="price float-left"><i className="icon-feature "></i> 韩国进口玻尿酸</span>
                        <span className="icon-ico-unfold  float-right"></span>
                    </div>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left"><i className="icon-feature "></i> 韩国进口水光针</span>
                        <span className="icon-ico-unfold  float-right"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListItem