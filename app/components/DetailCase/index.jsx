import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class DetailCase extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        const id = this.props.id
        return (
           <div className="detail-casel">
             <div className="detail-case-all">整容案例</div>
             {
                data
                ?   data.map((item, index) => {
                        return <Item key={index} data={item} id={id}/>
                    })
                : ''
             }
          </div>
        )
    }
}

export default DetailCase