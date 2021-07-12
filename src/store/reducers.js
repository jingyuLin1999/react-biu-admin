import { combineReducers } from "redux"
import app from './app/reducers'
import user from './user/reducers'


export default combineReducers({
    app,
    user
});