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
                        <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
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