import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

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
            	<Comment comment={this.comment.bind(this)}/>
            </div>
        )
    }
    comment(data) {
        if (this.props.userinfo.userName == null) {
            hashHistory.push('/register')
        }
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