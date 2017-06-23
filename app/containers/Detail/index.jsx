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
            recommed: [],
            activity: [],
            cases: [],
            id: ''
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
                            <Recommend data={this.state.recommed} id={this.state.id}/>
                            <Case data={this.state.cases} id={this.state.id}/>
                            <Activity data={this.state.activity} id={this.state.id}/>
                        </div>
                    : ''    
                }
                
            </div>
        )
    }
    componentDidMount() {
        const ID = this.props.params.id;
        const result = getInfoData(ID);
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                header:{
                    name: json.data.name,
                    addr: json.data.address,
                    degree_safe: json.data.popularity,
                    feedback_rate: json.data.activity,
                    follow: json.data.kobei,
                    logo: json.data.big_logo,
                    feature: json.data.feature
                },
                describe: {
                    brief_introduct: json.data.introduct,
                    pic: json.data.hospital_image,
                    id: ID
                },
                cases: json.data.cases,
                recommed:json.data.doctorItems,
                activity: json.data.activityItems,
                id: ID
            })
        })
    }
}
 
export default Detail