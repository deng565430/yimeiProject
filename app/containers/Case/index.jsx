import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CaseHeader from '../../components/CaseHeader'
import CaseMiddle from '../../components/CaseMiddle'

class Case extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <CaseHeader />
            	<CaseMiddle />
            </div>
        )
    }
}

export default Case