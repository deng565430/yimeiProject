import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ActivityHeader from '../../components/ActivityHeader'
import ActivityMiddle from '../../components/ActivityMiddle'

class Activity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <ActivityHeader />
            	<ActivityMiddle />
            </div>
        )
    }
}

export default Activity