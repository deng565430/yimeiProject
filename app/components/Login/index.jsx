import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            userPhone: '',
            nick: '',
            password: '',
            affirmpassword: ''
        }
    }
    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-phone-num"></i>
                    <input 
                        type="text" 
                        placeholder="请输入手机号" 
                        onChange={this.changeHandle.bind(this)} 
                        value={this.state.userPhone}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-verification"></i>
                    <input type="text" placeholder="请输入验证码"/>
                    <button>发送验证码</button>
                </div>
                <div className="input-container phone-container">
                    <i className="icon-nick "></i>
                    <input 
                        type="text" 
                        placeholder="请输入昵称" 
                        onChange={this.changeNick.bind(this)} 
                        value={this.state.nick}
                    />
                </div>
                <div className="input-container phone-container">
                    <i className="icon-password"></i>
                    <input 
                        type="password" 
                        placeholder="请输入密码" 
                        onChange={this.changePsd.bind(this)} 
                        value={this.state.password}
                    />
                </div>
                <div className="input-container phone-container">
                    <i className="icon-affirmpassword"></i>
                    <input 
                        type="password" 
                        placeholder="确认密码" 
                        onChange={this.changeAffPsd.bind(this)} 
                        value={this.state.affirmpassword}
                    />
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>注册</button>
            </div>
        )
    }
    changeHandle(e) {
        this.setState({
            userPhone: e.target.value
        })
    }
     changeNick(e) {
        this.setState({
            nick: e.target.value
        })
    }
     changePsd(e) {
        this.setState({
            password: e.target.value
        })
    }
     changeAffPsd(e) {
        this.setState({
            affirmpassword: e.target.value
        })
    }
    clickHandle() {
        const nick = this.state.nick
        const loginHandle = this.props.loginHandle
        loginHandle(nick);
    }
}

export default Login