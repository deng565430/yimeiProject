import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import SearchInput from '../SearchInput'

import './style.less'

class Commet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="comment" className="clear-fix">
                <div className="comment-middle">
                    <div className="search-container">
                        <i className="icon-comment"></i>
                        &nbsp;
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)} placeholder="写评论...."/>
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
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default Commet