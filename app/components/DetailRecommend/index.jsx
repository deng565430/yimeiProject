import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class DetailRecommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        console.log(this.props.data)
        return (
          <div>
                <div>
                    推荐医生
                </div>
                <div className="parent-recommend">
                    {
                        this.props.data
                        ? this.props.data.map((item, index) => {
                            return <Item key={index} data={item} />
                         })
                        : ''
                    }
                </div>
          </div>
        )
    }
}

export default DetailRecommend