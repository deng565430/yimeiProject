import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HospitalIntro extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const data = this.props.data
        return (
           <div>
	           {
	           		data
	           		?	<div className="hospital-intro">
	           				<h1>{data.name}</h1>
	           				<div className="hospital-intro-top">
	           					<h3>医院介绍：</h3>
	           					<p>{data.introduct}</p>
	           					<h3>医院优势项目：</h3>
	           					<p>{data.feature}</p>
	           					
	           				</div>
	           				<div className="hospital-intro-middle">
	           					<h4>医院环境</h4>
	           					<div>
	           						{
	           							data.hospital_image
	           							? 	data.hospital_image.map((item, index) => {
	           									return <img key={index} src={item} />
	           								})
	           							: ''
	           						}
	           					</div>
	           				</div>
	           			</div>
	           		: ''
	           }
           </div>
        )
    }
}

export default HospitalIntro