"use strict"

/**
 * Created by pccb on 2017/5/23.
 */
import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import PageError from '../containers/PageError'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 [https://github.com/reactjs/react-router/tree/master/examples/huge-apps]

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/user' component={User}/>
                    <Route path='/search/:type(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='*' component={PageError}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap