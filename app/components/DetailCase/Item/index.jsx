import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import Carousel from '../../Carousel'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }
    render() {
        const data = this.props.data
        const id = this.props.id
        return (
           <div className="detail-case-list">
             <Carousel data={data.pic_after} id={id}/>
             <Link to={'/case/' + data.proj}><p><i className="icon-sign"></i> {data.proj}</p></Link>
          </div>
        )
    }
}

export default Item