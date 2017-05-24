"use strict"
/**
 * Created by pccb on 2017/5/23.
 */
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }

    }

    render() {
        return (
            <div>{
                this.state.initDone ?
                    this.props.children :
                    <div>加载中......</div>
            }
            </div>
        )
    }

    componentDidMount() {
        //从localstroerage里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京'
        }
        // console.log(cityName);
        //将城市信息存储到redux中
    }
}

export default App