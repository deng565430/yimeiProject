import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const userinfo = this.props.userinfo
        return (
            <div>
                <Header title="用户主页" backRouter="/home"/>
            	<UserInfo username={userinfo.userName} />
            </div>
        )
    }
    componentDidMount() {
    	console.log(this.props);
    }


   test() {
        //滚动时保存滚动位置
        window.addEventListener('scroll', function() {
            const windowHeight = window.screen.height
            if (windowHeight != 0) {　　　　
                sessionStorage.setItem("offsetTop", windowHeight); //保存滚动位置
                　　　
            }
        });

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
)(User)