import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star'
import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        return (
            <div className="detail-header">
            	<div className="detail-bg">
            		<img src={data.logo} />
            	</div>
            	<div className="detail-logo">
            		<img src={data.logo} alt={data.title}/>
            	</div>
            	<div className="detail-title">
            		<h1>{data.name}</h1>
            	</div>
            	<div className="detail-desc">
            		<div>
            			<ul>
            				<li>关注度</li>
            				<li><Star star={data.follow} /></li>
            			</ul>
            		</div>
            		<div>
            			<ul>
            				<li>安全度</li>
            				<li><Star star={data.degree_safe} /></li>
            			</ul>
            		</div>
            		<div>
            			<ul>
            				<li>好评率</li>
            				<li><Star star={data.feedback_rate} /></li>
            			</ul>
            		</div>
            	</div>
            </div>
        )
    }
}

export default Header