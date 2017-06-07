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
            <div>
                <p>
                    {this.props.data}

                    <Link to="/search/jingdian">查看更多</Link>
                </p>

            </div>
          </div>
        )
    }
}

export default Describe