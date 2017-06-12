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
        return (
            <div className="doc-header">
               <div className="doc-header-left">
                   <img src="" alt=""/>11
               </div>
               <div className="doc-header-right">
                   <h4>張三丰 <span> 皮肤美容医生</span></h4>
                   <p>韩国首尔大学讲师</p>
                   <p>韩国首尔大学讲师</p>
                   <p>韩国首尔大学讲师</p>
                   <p>韩国首尔大学讲师</p>
                   <p>韩国首尔大学讲师</p>
               </div>
            </div>
        )
    }
}

export default DoctorHeader