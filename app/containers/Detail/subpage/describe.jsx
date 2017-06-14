import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ComponentsDescribe from '../../../components/DetailDescribe'
import ComponentsSlideshow from '../../../components/DetailSlideshow'

import './style.less'

class Describe extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const brief_introduct = this.props.data.brief_introduct;
        const pic = this.props.data.pic;
        return (
          <div>
                {
                    this.props.data.pic
                    ? <ComponentsSlideshow data={pic}/>
                    : ''
                }
                {
                    this.props.data.brief_introduct
                    ? <ComponentsDescribe data={brief_introduct}/>
                    : ''
                }
          </div>
        )
    }
}

export default Describe