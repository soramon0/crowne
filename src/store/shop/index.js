import types from './types'

const initial_state = {
	collections: null
}

const shopReducer = (state = initial_state, { type, payload }) => {	
	switch (type) {
		case types.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: payload
			}

		default:
			return state
	}
}

export default shopReducer