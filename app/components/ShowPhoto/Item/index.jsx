import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="show-phone">
                <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
            </div>
        )
    }
}

export default Item