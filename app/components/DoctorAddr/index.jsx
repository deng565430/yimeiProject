import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.less'

class DoctorAddr extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
      const data = this.props.data
        return (
            <div className="doc-addr">
               <div>
                   <Link to={'/detail/' + data.id}><p>所在医院：<span>{data.hopitalname}</span><i className="icon-ico-unfold float-right"></i></p></Link>
               </div>
               <div>
                   {/*<p>职业医师编号</p>*/}
               </div>
               <div>
                   <p>所在区域：<span>{data.learning_course}</span></p>
               </div>
               <div>
                  <p>擅长项目：</p>
                  <span> {data.feature}</span>
               </div>
            </div>
        )
    }
}

export default DoctorAddr