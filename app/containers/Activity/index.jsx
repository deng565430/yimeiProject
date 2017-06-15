import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from './subpages/Header'
import Desc from './subpages/Desc'

class Activity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header />
                <Desc />
            </div>
        )
    }
}

export default Activity