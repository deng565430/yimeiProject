import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import './style.less'

class Slideshow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
          <div>
               {
                this.props.data 
                ? this.props.data.map((item, index) => {
                    return <img width="100" key={index} src={item} />
                })
                : ''
               }
          </div>
        )
    }
}

export default Slideshow