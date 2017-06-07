import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class DetailActivity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div>
               <div> 活动</div>
               <div>
                   {
                    [1,2,3,4,5].map((item,index) => {
                        return  <Item key={index} data={item} />
                    })
                   }
               </div>
          </div>
        )
    }
}

export default DetailActivity