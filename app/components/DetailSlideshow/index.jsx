import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Slideshow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          index: 0
        }
    }
    render() {
        const opt = {
            auto: 0,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
          <div className="detail-silde">
              <ReactSwipe swipeOptions={opt}> 
                <div><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                <div><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                <div><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
              </ReactSwipe> 
          </div>
        )
    }
}

export default Slideshow