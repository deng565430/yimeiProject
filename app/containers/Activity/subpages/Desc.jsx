import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Desc extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="activity-desc">
              <div className="activity-desc-top">
                  <div>
                      <h2>团购详情</h2>
                  </div>
                  <div>
                      <h4>1、团购项目</h4>
                      <p> 玻尿酸垫下巴</p>
                  </div>
                  <div>
                      <h4>2、团购项目</h4>
                      <p> 玻尿酸垫下巴</p>
                  </div>
                  <div>
                      <h4>3、团购项目</h4>
                      <p> 玻尿酸垫下巴</p>
                  </div>
              </div>
              <div className="activity-desc-middle">
                  <div>
                      <div className="activity-desc-middle-img">
                          <img src={require('../../../static/image/desc_project_01.png')} />
                      </div>
                      <div className="activity-desc-middle-desc">
                          <ol>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                          </ol>
                      </div>
                  </div>
              </div>
              <div className="activity-desc-middle">
                  <div>
                      <div className="activity-desc-middle-img">
                          <img src={require('../../../static/image/desc_project_02.png')} />
                      </div>
                      <div className="activity-desc-middle-desc">
                          <ol>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                          </ol>
                      </div>
                  </div>
              </div>
              <div className="activity-desc-middle">
                  <div>
                      <div className="activity-desc-middle-img">
                          <img src={require('../../../static/image/desc_project_02.png')} />
                      </div>
                      <div className="activity-desc-middle-desc">
                          <ol>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                          </ol>
                      </div>
                  </div>
              </div>
              <div className="activity-desc-middle">
                  <div>
                      <div className="activity-desc-middle-img">
                          <img src={require('../../../static/image/desc_project_02.png')} />
                      </div>
                      <div className="activity-desc-middle-desc">
                          <ol>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                              <li><span>1</span>玻尿酸</li>
                          </ol>
                      </div>
                  </div>
              </div>
              <div className="activity-desc-buttom">
                  <h3>项目流程</h3>
                  <div>
                      <img src="http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png" />
                  </div>
              </div>
            </div>
        )
    }
}

export default Desc