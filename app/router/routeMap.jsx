import React from 'react'
import { Router, Route, IndexRoute, hashHistory  } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Doctor from '../containers/Doctor'
import Activity from '../containers/Activity'
import HospitalIntro from '../containers/HospitalIntro'
import Case from '../containers/Case'
import User from '../containers/User'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/hospital/:id' component={HospitalIntro}/>
                    <Route path='/doctor/:id' component={Doctor}/>
                    <Route path='/activity/:id' component={Activity}/>
                    <Route path='/case/:id' component={Case}/>
                    <Route path='/user' component={User}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
