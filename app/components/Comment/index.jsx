import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, hashHistory } from 'react-router'
import SearchInput from '../SearchInput'

import './style.less'

class Commet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div id="comment" className="clear-fix">
                <div className="comment-middle">
                    <div className="search-container">
                        <i className="icon-comment"></i>
                        &nbsp;
                        <SearchInput value={this.state.value} enterHandle={this.enterHandle.bind(this)} placeholder="写评论...."/>
                    </div>
                </div>
                <div className="comment-right float-right">
                  <span>10</span>
                   <i className="icon-msg"></i>
                </div>
            </div>
        )
    }
    enterHandle(value) {
        this.props.comment(value)    
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Commet)