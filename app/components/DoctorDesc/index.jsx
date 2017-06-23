import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class DoctorDesc extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="doc-desc">
               <div>医生介绍</div>
               <ul>
                 <li> {data.learning_course}</li>
                 <li> {data.introduct}</li>
               </ul>
            </div>
        )
    }
}

export default DoctorDesc