import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { getDoctor } from '../../fetch/doctor/doctor'

import Header from '../../components/DoctorHeader'
import DoctorAddr from '../../components/DoctorAddr'
import DoctorDesc from '../../components/DoctorDesc'
import Comment from '../../components/Comment'

class Doctor extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hospitalId: '',
            doctorId: '',
            headerData: {},
            doctorAddr: {},
            doctorDesc: {}
        }
    }
    render() {
        return (
            <div>
            	<Header data={this.state.headerData}/>
            	<DoctorAddr data={this.state.doctorAddr}/>
            	<DoctorDesc data={this.state.doctorDesc}/>
            	{/*<Comment comment={this.comment.bind(this)}/>*/}
            </div>
        )
    }
    comment(data) {
        if (this.props.userinfo.userName == null) {
            hashHistory.push('/register')
        }
    }
    componentDidMount() {
        const hospitalId = this.props.params.hospitalId
        const doctorId = this.props.params.doctorId
        this.setState({
            hospitalId: hospitalId,
            doctorId: doctorId
        })
        const result = getDoctor(doctorId);
        result.then(res => {
            return res.json()
        }).then(json => {
            console.log(json)
            const data = json.data
            this.setState({
                headerData: {
                    name: data.name,
                    job_title: data.job_title,
                    photo: 'http://192.168.1.112:8080/image/doctor/20170307/5/20170307164912408_225_300.jpg',//'http://http://192.168.1.112:8080/image'+ data.photo,
                    position: data.position,
                    career_exper: data.career_exper
                },
                doctorAddr: {
                    hopitalname: data.hopitalname,
                    feature: data.feature,
                    id: hospitalId
                },
                doctorDesc: {
                    learning_course: data.learning_course,
                    introduct: data.introduct
                }
            })
        })

    }
}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dspatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Doctor)