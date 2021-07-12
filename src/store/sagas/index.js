import { all, fork } from 'redux-saga/effects'
import user from './user'

export default function* sagas() {
    yield all([
        fork(user)
    ])
}