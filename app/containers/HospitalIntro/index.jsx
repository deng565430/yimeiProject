import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getHospital } from '../../fetch/hospital/hospital'

import ComponentsHospitalIntro from '../../components/HospitalIntro'

class HospitalIntro extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	id: '',
            hospitalIntro: {}
        }
    }
    render() {
        return (
           <div>
	           {
	           		this.props.params.id
	           		?	<ComponentsHospitalIntro data={this.state.hospitalIntro}/>
	           		: ''
	           }
           </div>
        )
    }
    componentDidMount() {
        const id = this.props.params.id
        this.setState({
            id: id
        })
        const result = getHospital(id)
        result.then(res => {
            return res.json()
        }).then(json => {
            console.log(json)
            const data = json.data
            this.setState({
                hospitalIntro:{
                    name: data.name,
                    introduct: data.introduct,
                    feature: data.feature,
                    hospital_image: data.hospital_image
                }
            })
        })
    }
}

export default HospitalIntro