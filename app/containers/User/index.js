"use strict"
/**
 * Created by pccb on 2017/5/23.
 */

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <h1>user</h1>
            </div>
        )
    }
}

module.exports = User