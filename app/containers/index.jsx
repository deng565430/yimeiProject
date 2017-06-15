import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { USERNAME } from '../redux/config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../redux/actions/userinfo' 

import Phone from './CallPhone'


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>正在加载...</div>
                }
                <Phone />
            </div>
        )
    }
    componentDidMount() {
        // 在这里获取用户信息
        let userName = LocalStore.getItem(USERNAME)
        console.log(userName)
        this.props.userInfoActions.update({
            userName: userName
        })

        // 更改状态
        this.setState({
            initDone: true
        })
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
