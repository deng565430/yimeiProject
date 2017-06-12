import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import './style.less'

class Carousel extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: '',
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        const data = this.props.data;
        return (
          <div className="carousel">
              <ReactSwipe swipeOptions={opt}> 
                <div className="carousel-item">
                    <div>
                        <div className="carousel-img"><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                    </div>
                    <div>
                        <div className="carousel-img"><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>

                    </div>
                    <div>
                        <div className="carousel-img"><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <div>
                        <div className="carousel-img"><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                        
                    </div>
                    <div>
                        <div className="carousel-img"><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                        
                    </div>
                    <div>
                        <div className="carousel-img"><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <div>
                        <div className="carousel-img"><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                        
                    </div>
                    <div>
                        <div className="carousel-img"><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                       
                    </div>
                    <div>
                        <div className="carousel-img"><img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" /></div>
                       
                    </div>
                </div>
              </ReactSwipe> 
          </div>
        )
    }
}

export default Carousel