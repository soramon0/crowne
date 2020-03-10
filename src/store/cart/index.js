import types from './types'

const initial_state = {
	hidden: true
}

const cartReducer = (state = initial_state, { type, payload }) => {	
	switch (type) {
		case types.TOGGLE_CART_HIDDEN:		
			return {
				...state,
				hidden: !state.hidden
			}

		default:
			return state
	}
}

export default cartReducer