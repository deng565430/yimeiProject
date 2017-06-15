import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, hashHistory } from 'react-router'
import configureStore from './redux/store/configureStore'
import Historys from 'history'
console.log(Historys)

// 路由重定向， 解决跳转之后不是在顶部问题
import UseScroll from 'use-scroll-behavior'
const history = UseScroll(hashHistory)

console.log(history)

import './static/css/common.less'
import './static/css/font.css'

// 创建 Redux 的 store 对象
const store = configureStore()

import RouteMap from './router/routeMap'

render(
    <Provider store={store}>
        <RouteMap history={history}/>
    </Provider>,
    document.getElementById('root')
)
