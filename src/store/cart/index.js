import types from './types'
import { addItemToCart } from './utils'

const initial_state = {
	hidden: true,
	cartItems: []
}

const cartReducer = (state = initial_state, { type, payload }) => {	
	switch (type) {
		case types.TOGGLE_CART_HIDDEN:		
			return {
				...state,
				hidden: !state.hidden
			}

		case types.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, payload)
			}

		default:
			return state
	}
}

export default cartReducer