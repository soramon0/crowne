import types from './types'

const initial_state = {
	currentUser: null,
	error: null,
}

const userReducer = (state = initial_state, { type, payload }) => {
	switch (type) {
		case types.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
				error: null
			}
		case types.SIGN_IN_FAILURE:
		case types.SIGN_OUT_FAILURE:
		case types.SIGN_UP_FAILURE:
			return {
				...state,
				error: payload
			}
		case types.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null
			}
		default:
			return state
	}
}

export default userReducer