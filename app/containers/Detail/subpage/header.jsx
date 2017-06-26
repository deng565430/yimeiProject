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
        return (
          <div>
          	{
              this.props.data
              ? <div>
                  <ComponentsHeader data={data}/>
                  <div></div>
                  <ComponentsFeature data={data}/>
                </div>
              : ''
            }
          </div>
        )
    }
}

export default Header