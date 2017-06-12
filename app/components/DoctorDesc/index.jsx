import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class DoctorDesc extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="doc-desc">
               <div>医生介绍</div>
               <ul>
                 <li> 医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍</li>
                 <li> 医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍</li>
                 <li> 医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍</li>
                 <li> 医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍</li>
                 <li> 医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍</li>
                 <li> 医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍</li>
                 <li> 医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍医生介绍</li>
               </ul>
            </div>
        )
    }
}

export default DoctorDesc