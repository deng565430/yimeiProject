import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
          <div className="recommend">
                <div className="recommend-img">
                    <div>
                        <img src={data.touxiang} />
                    </div>
                </div>
                <div className="recommend-title">
                    <h3>{data.name}</h3>
                </div>
                <div className="recommend-desc">
                    <p>{data.jianjie}</p>
                </div>
          </div>
        )
    }
}

export default List