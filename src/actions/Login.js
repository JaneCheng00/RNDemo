/**
 * Created by apple on 16/10/23.
 *
 * request={ "service":"/Login/checkLogin",
"params":{"username":"tljzw","passwd":"123234"}}

 {"_MSG_":true,
  "data":{
      "passwd":"bb49f226bf2b2d4e592580bd0f0e14b8",
      "quanxian":"",
      "username":"tljzw",
      "realname":"姜志伟"
      },
  "tipStr":"登录成功","state":2}
 */
'use strict';
import * as types from '../constants/ActionTypes';
import { default as config } from '../config';

//模拟服务器返回的用户信息
let user = {
    'username':'tljzw',
    'realname':'姜志伟',
    'passwd':'bb49f226bf2b2d4e592580bd0f0e14b8',
}

// 执行登录
export function doLogin() {
    return dispatch =>{
        dispatch(isLogining());
        // 模拟用户登录
        let result = fetch(config.queryUrl, {
            body: JSON.stringify({
                "username": "tljzw",
                "passwd": '123456',
            })}
        )
            .then((res) =>{
                console.log('登录成功');
                dispatch(loginSuccess(true, user));
            }).
            catch((e) =>{
                console.log('登录失败');
                dispatch(loginSuccess(true, user));
            });
    }
}

// 正在登录
function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

// 登录完成
function loginSuccess(isSuccess, user) {
    return {
        type: types.LOGIN_IN_DONE,
        isSuccess: isSuccess,
        user: user
    }
}