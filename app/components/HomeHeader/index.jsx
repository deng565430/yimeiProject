import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import SearchInput from '../SearchInput'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                </div>
                <div className="home-header-right float-right">
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-seek"></i>
                        &nbsp;
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader