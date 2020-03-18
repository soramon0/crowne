import types from './types'
import { takeLatest, call, put, all } from 'redux-saga/effects'
import { firestore, covertCollectionSnapshotToMap } from '../../services/firebase';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './actions';

function* fetchCollectionsAsync() {
	try {
		const collectionsRef = firestore.collection('collections')
		const snapshot = yield collectionsRef.get()
		const collectionsMap = yield call(covertCollectionSnapshotToMap, snapshot)

		yield put(fetchCollectionsSuccess(collectionsMap))
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message))
	}
}

function* fetchCollectionsStart() {
	yield takeLatest(types.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export default function* shopSagas() {
	yield all([
		call(fetchCollectionsStart)
	])
}