import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Carousel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0,
            data: [1,2,3,4,5]
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
        const num = data.length / 2 < 1 ? 1 : Math.ceil(data.length / 2)
        const arr = new Array(num).fill('0');
        return (
          <div className="carousel">
              <ReactSwipe> 
                {
                    this.props.data 
                    ? arr.map((item, index) => {
                        return <div className="carousel-item" key={index}>
                                    <div>
                                        <div className="carousel-img"><img src={data[0 * (index + 1)]} /></div>
                                    </div>
                                    <div>
                                        <div className="carousel-img"><img src={data[1 * (index + 1)]} /></div>
                                    </div>
                                    <div>
                                        <div className="carousel-img"><img src={data[2 * (index + 1)]} /></div>
                                    </div>
                                </div>
                    })
                    : ''
                }
              </ReactSwipe> 
          </div>
        )
    }
}

export default Carousel