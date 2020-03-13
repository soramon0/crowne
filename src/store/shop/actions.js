import types from './types'
import { firestore, covertCollectionSnapshotToMap } from '../../services/firebase';

export const fetchCollectionsStart = () => ({
	type: types.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
	type: types.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
	type: types.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
})

export const fetchCollectionsStartAsync = () => async dispatch => {
	dispatch(fetchCollectionsStart())

	try {
		const collectionRef = firestore.collection('collections')
		const snapshot = await collectionRef.get()
		const collectionsMap = covertCollectionSnapshotToMap(snapshot)

		dispatch(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		dispatch(fetchCollectionsFailure(error.message))
	}
}