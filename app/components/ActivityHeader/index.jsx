import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class ActivityHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="active-header">
              <div className="active-header-top">
                <div>
                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                    <span>Before</span>
                </div>
                <div>
                    <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                    <span>After</span>
                </div>
              </div>
              <div className="active-header-middle">
                  <div>
                      <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                  </div>
                  <div>
                      <div>
                          <p>三个人人  <i className="icon-gurl"> </i></p>
                      </div>
                      <div>
                          <span>鼻综合</span>
                          <span>鼻综合</span>
                          <span>鼻综合</span>
                      </div>
                  </div>
              </div>
              <div className="active-header-buttom active-header-middle">
                  <div>
                      <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                  </div>
                  <div>
                      <div>
                          <p>上海美立方医疗美容医院</p>
                          <p>上海长宁路延安西路200号</p>
                          <p>手术时间：2017-03-05</p>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
}

export default ActivityHeader