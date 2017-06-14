import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ComponentsHospitalIntro from '../../components/HospitalIntro'

class HospitalIntro extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	data: '123'
        }
    }
    render() {
        return (
           <div>
	           {
	           		this.props.params.id
	           		?	<ComponentsHospitalIntro data={this.state.data}/>
	           		: ''
	           }
           </div>
        )
    }
}

export default HospitalIntro