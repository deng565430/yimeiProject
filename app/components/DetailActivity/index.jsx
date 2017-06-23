import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import Item from './Item'

import './style.less'

class DetailActivity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const id = this.props.id
        return (
          <div className="detail-activity">
               <div className="detail-activity-title"> 活动</div>
               <div>
                   {
                      data.length
                      ? data.map((item,index) => {
                          return  <Link to={'/activity/'+ id + '/' + item.id} key={index}><Item  data={item} /></Link>
                        })
                      : <div className="no-more">没有更多了</div>
                   }
               </div>
          </div>
        )
    }
}

export default DetailActivity