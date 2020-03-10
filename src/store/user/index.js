import types from './types'

const initial_state = {
	currentUser: null
}

const userReducer = (state = initial_state, { type, payload }) => {	
	switch (type) {
		case types.SET_CURRENT_USER:		
			return {
				...state,
				currentUser: payload
			}

		default:
			return state
	}
}

export default userReducer