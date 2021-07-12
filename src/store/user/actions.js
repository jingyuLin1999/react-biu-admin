import { createAction } from 'redux-actions';
import * as actions from './types'

export const userLogin = createAction(actions.USER_LOGIN)
export const userLoginStatus = createAction(actions.USER_LOGIN_STATUS)
export const userLogout = createAction(actions.USER_LOGOUT)

