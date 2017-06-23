import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

import './style.less'

class Item extends React.Component {
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
        const id = this.props.id
        const num = data.length / 2 < 1 ? 1 : Math.ceil(data.length / 2)  //计算需要遍历的数组长度
        const arr = new Array(num).fill('0'); //填充数组值
        return (
          <div className="carousel-doctor">
              <ReactSwipe> 
              {
                arr
                ? arr.map((item, index) => {
                    return <div className="carousel-item" key={index}>
                            {
                                data
                                ?   data.map((item, index) => {
                                        return  <div key={index} className="doctor-photo">
                                                    <Link to={'/doctor/' + id + '/' + item.id}>
                                                        <div className="carousel-img"><img src={item.photo} /></div>
                                                        <div className="carousel-name">{item.name}</div>
                                                        <div className="carousel-desc">{item.job_title}<span>{item.employ_time}</span></div>
                                                    </Link>
                                                </div>
                                    })
                                : ''
                            }
                        </div>
                    })
                : ''
              }
              </ReactSwipe> 
          </div>
        )
    }
}

export default Item