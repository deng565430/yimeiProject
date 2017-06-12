import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class DoctorAddr extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="doc-addr">
               <div>
                   <p>所在医院：上海美容医院<span className="icon-ico-unfold float-right"></span></p>
               </div>
               <div>
                   <p>职业医师编号： 2200118</p>
               </div>
               <div>
                   <p>所在区域：上海市</p>
               </div>
               <div>
                  <p>擅长项目</p>
                  <p>祛皱抗衰美容养颜</p>
               </div>
            </div>
        )
    }
}

export default DoctorAddr