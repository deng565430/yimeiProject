import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getInfoData } from '../../fetch/detail/detai'

import Header from './subpage/Header'
import Describe from './subpage/Describe'
import Recommend from './subpage/Recommend'
import Case from './subpage/Case'
import Activity from './subpage/Activity'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            header: {},
            describe: {},
            recommed: []
        }
    }
    render() {
        // 获取商户ID
        const id = this.props.params.id
        return (
            <div>
                {
                    this.props.params.id
                    ?   <div>
                            <Header data={this.state.header}/>
                            <Describe data={this.state.describe} />
                            <Recommend data={this.state.recommed} />
                            <Case />
                            <Activity />
                        </div>
                    : ''    
                }
                
            </div>
        )
    }
    componentDidMount() {
        const result = getInfoData();
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                header:{
                    name: json.data.name,
                    addr: json.data.addr,
                    degree_safe: json.data.degree_safe,
                    feedback_rate: json.data.feedback_rate,
                    follow: json.data.follow,
                    logo: json.data.logo,
                    feature: json.data.feature
                },
                describe: {
                    brief_introduct: json.data.brief_introduct,
                    pic: json.data.pic
                },
                recommed:json.data.tuijian_doctor
            })
        })
    }
}
 
export default Detail