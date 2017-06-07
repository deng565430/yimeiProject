import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ReactSwipe from 'react-swipe'

import Item from './Item'

import './style.less'

class ShowPhoto extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <ReactSwipe className="card-slide">
                {
                    [1,2,3,4,5].map((items, index) => {
                        return <div className="item" key={items}><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                    })
                }
            </ReactSwipe>
        )
    }
}

export default ShowPhoto