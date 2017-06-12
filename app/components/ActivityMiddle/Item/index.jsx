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
            <div className="activity-clild-item">
              <div className="item-top">
                <i className="icon-label"> </i><span>   手术前</span>
              </div>
              <div className="item-img">
                    <div>
                        <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                    </div>
                    <div>
                        <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                    </div>
                    <div>
                        <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                    </div>
              </div>
            </div>
        )
    }
}

export default Item