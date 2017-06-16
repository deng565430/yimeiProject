import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-user"></i>
                    <input 
                        type="text" 
                        placeholder="请输入用户名" 
                        onChange={this.changeHandle.bind(this)} 
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-password"></i>
                    <input type="password" placeholder="请输入密码"
                            onChange={this.changePsd.bind(this)} 
                            value={this.state.password}/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )
    }
    changeHandle(e) {
        this.setState({
            username: e.target.value
        })
    }
    changePsd(e) {
        this.setState({
            password: e.target.value
        })
    }
    clickHandle() {
        const username = this.state.username
        const password = this.state.password
        const loginHandle = this.props.loginHandle
        loginHandle(username, password);
    }
}

export default Login