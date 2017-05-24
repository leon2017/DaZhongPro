"use strict"
/**
 * Created by pccb on 2017/5/23.
 */

import {get} from './httpGet.js'

export function testFetch() {
    return get('/api/2')
}