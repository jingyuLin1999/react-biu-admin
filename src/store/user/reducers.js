import { handleActions } from 'redux-actions'
import * as actions from './types'
import { fromJS } from 'immutable'

let initDatas = fromJS({
    permission: [],
    authorize: "",
    username: "",
    avatar: "",
    loginStatus: false,
})

export default handleActions({
    [actions.USER_LOGIN_STATUS]: (state, action) => {
        return state.mergeDeep(action.payload)
    },
    [actions.USER_LOGOUT]: (state, action) => {
        return state.set("loginStatus", false)
    }
}, initDatas)
