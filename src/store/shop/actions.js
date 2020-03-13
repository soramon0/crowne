import types from './types'

export const updateCollections = (collectionMap) => ({
	type: types.UPDATE_COLLECTIONS,
	payload: collectionMap
})