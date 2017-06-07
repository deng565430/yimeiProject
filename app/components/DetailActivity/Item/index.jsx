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
          <div className="activity-item">
               <div className="activity-item-left">
                 <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
               </div>
               <div className="activity-item-right">
                 <div>
                   <p><span>【肉毒素瘦脸】</span>进口瘦脸针进口瘦脸针进口瘦脸针进口瘦脸针</p>
                 </div>
                 <div>￥1280 <span>￥3880</span></div>
                 <div>
                   <p>已售出： <span>336</span></p>
                 </div>
               </div>
          </div>
        )
    }
}

export default Item