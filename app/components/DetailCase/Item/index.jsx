import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ShowPhoto from '../../ShowPhoto'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div>
             <ShowPhoto />
             <p>鼻综合，下巴整形</p>
             <ShowPhoto />
             <p>双眼皮</p>
          </div>
        )
    }
}

export default Item