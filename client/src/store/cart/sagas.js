import { takeLatest, put, all, call } from 'redux-saga/effects'

import types from '../user/types'
import { clearCart } from './actions'

function* clearCartOnSignOut() {
	yield put(clearCart())
}

function* onSignOutSuccess() {
	yield takeLatest(types.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export default function* cartSagas() {
	yield all([
		call(onSignOutSuccess),
	])
}