import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class Describe extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div>
            <div className="detail-desc">
                <p>
                    {this.props.data}
                </p>
                <Link to={'/hospital/' + this.props.id}>查看更多<i className="icon-ico-unfold"></i></Link>
            </div>
          </div>
        )
    }
}

export default Describe