"use strict"
/**
 * Created by pccb on 2017/5/23.
 */
import 'whatwg-fetch'
import 'es6-promise'

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式

function obj2params(obj) {
    let result = '';
    let item;
    for (item in obj) {
        result += "&" + item + "=" + encodeURIComponent(obj[item]);
    }

    if(result){
        result = result.slice(1);
    }

    return result;
}

//发送post请求
export function post(url, paramsObj) {
    let result = fetch(url,{
        method:'POST',
        credentials:'include',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:obj2params(paramsObj)
    });

    return result;
}
