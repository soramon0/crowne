import { all, call } from 'redux-saga/effects'
import userSagas from './user/sagas'
import shopSagas from './shop/sagas'
import cartSagas from './cart/sagas'

export default function* rootSaga() {
	yield all([
		call(userSagas),
		call(shopSagas),
		call(cartSagas),
	])
}