"use strict"
/**
 * Created by pccb on 2017/5/23.
 */
import * as actionTypes from '../constants/userinfo'

export function login(data) {
    return{
        type:actionTypes.USERINFO_LOGIN,
        data
    }
}