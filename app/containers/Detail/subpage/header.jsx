import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ComponentsHeader from '../../../components/DetailHeader'
import ComponentsFeature from '../../../components/DetailFeature'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        console.log(data);
        return (
          <div>
          	<ComponentsHeader data={data}/>
          	<ComponentsFeature data={data}/>
          </div>
        )
    }
}

export default Header