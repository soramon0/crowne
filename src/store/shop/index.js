import types from './types'

const initial_state = {
	collections: null,
	isFetching: false,
	errorMessage: undefined
}

const shopReducer = (state = initial_state, { type, payload }) => {	
	switch (type) {
		case types.FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true
			}
		case types.FETCH_COLLECTIONS_SUCCESS:
				return {
					...state,
					isFetching: false,
					collections: payload
				}
		case types.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: payload
			}

		default:
			return state
	}
}

export default shopReducer