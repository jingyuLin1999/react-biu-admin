import { handleActions } from 'redux-actions'
import * as actions from './types'
import { fromJS } from 'immutable'

let initDatas = fromJS({
    is_collapsed: false, // 左侧面板是否收缩
})

export default handleActions({
    [actions.IS_COLLAPSED]: (state, action) => {
        return state.set("is_collapsed", !state.get("is_collapsed"))
    }
}, initDatas)
