import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Phone extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
           <div id="call-phone">
           		<div onClick={this.callPhone.bind(this)}><i className="icon-phone"></i></div>
           		<div onClick={this.callChat.bind(this)}><i className="icon-chat"></i></div>
           </div>
        )
    }
    callPhone() {
    	alert('拨打电话');
    }
    callChat() {
    	alert('选择聊天');
    }
}

export default Phone