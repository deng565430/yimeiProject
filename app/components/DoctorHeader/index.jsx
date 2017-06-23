import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'

class DoctorHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="doc-header">
               <div className="doc-header-left">
                   <img src={data.photo} alt={data.name}/>
               </div>
               <div className="doc-header-right">
                   <h4>{data.name} <span> {data.position}</span></h4>
                   <p>{data.career_exper}</p>
               </div>
            </div>
        )
    }
}

export default DoctorHeader