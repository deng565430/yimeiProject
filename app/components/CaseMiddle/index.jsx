import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class ActivityMiddle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="case-middle">
              <div className="middle-top">蜕变时光轴</div>
              <div>
                  {
                    [1,2,3].map((item, index) => {
                        return <Item key={index} data={item}/>
                    })
                  }
              </div>
            </div>
        )
    }
}

export default ActivityMiddle