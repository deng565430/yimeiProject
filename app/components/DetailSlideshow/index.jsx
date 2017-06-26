import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { path } from '../../util/api'

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
        const data = this.props.data
        const id = this.props.id
        return (
          <div className="detail-silde">
              <ReactSwipe swipeOptions={opt}>
              {
                data
                ? data.map((item, index) => {
                    return <div key={index}><img src={path + item} /></div>
                })
                : ''
              }
              </ReactSwipe> 
          </div>
        )
    }
}

export default Slideshow