import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import Header from '../../components/DoctorHeader'
import DoctorAddr from '../../components/DoctorAddr'
import DoctorDesc from '../../components/DoctorDesc'
import Comment from '../../components/Comment'

class Doctor extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
            	<Header />
            	<DoctorAddr />
            	<DoctorDesc />
            	<Comment />
            </div>
        )
    }
}

export default Doctor