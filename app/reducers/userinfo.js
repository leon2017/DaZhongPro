"use strict"
/**
 * Created by pccb on 2017/5/23.
 */
import * as actionTypes from '../constants/userinfo'

const initialState ={}
export default function userinfo(state = initialState,action) {
    switch (action.type){
        case actionTypes.USERINFO_LOGIN:
            return action.data
        default:
            return state
    }
}