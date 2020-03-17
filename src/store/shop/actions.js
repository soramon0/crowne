import types from './types'

export const fetchCollectionsStart = () => ({
	type: types.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
	type: types.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
})

export const fetchCollectionsFailure = errorMessage => ({
	type: types.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
})