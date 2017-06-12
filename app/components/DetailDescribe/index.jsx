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
                    簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介
                    簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介
                    簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介
                    <Link to="/search/jingdian">查看更多<i className="icon-ico-unfold"></i></Link>
                </p>

            </div>
          </div>
        )
    }
}

export default Describe