import { buffers } from "redux-saga"
import { take, put, actionChannel, fork } from '@redux-saga/core/effects';
import { userLoginStatus } from '@/store/user/actions';
import * as types from '@/store/user/types';

function* authorize(payload) {
    try {
        // 返回有权限的路由，token,用户信息
        // const {permission,token,user} = yield call(Api.authorize, user, password)
        let user = { username: "", avatar: '' };
        yield put(userLoginStatus({
            loginStatus: true,
            permission: ['/',"/404"],
            authorize: "kekrwrighudskjlfgdjkhesafyu",
            ...user
        }))
    } catch (error) {
        // yield put({ type: 'LOGIN_ERROR', error })
    }
}

export default function* user() {
    const requestChan = yield actionChannel(
        [
            types.USER_LOGIN,
            types.USER_LOGOUT
        ],
        buffers.fixed(100),
    );
    while (true) {
        let { type, payload } = yield take(requestChan);
        if (type === types.USER_LOGIN) {
            yield fork(authorize, payload)
        } else if (type === types.USER_LOGOUT) {

        }
    }
}

