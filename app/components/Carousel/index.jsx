import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

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
        return (
          <div className="carousel">
              <ReactSwipe> 
                {
                    this.props.data 
                    ? this.props.data.map((item, index) => {
                        return <div className="carousel-item" key={index}>
                                    <div>
                                        <div className="carousel-img"><Link to={`${item}`}><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></Link></div>
                                    </div>
                                    <div>
                                        <div className="carousel-img"><Link to={`${item}`}><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></Link></div>

                                    </div>
                                    <div>
                                        <div className="carousel-img"><Link to={`${item}`}><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></Link></div>
                                        
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