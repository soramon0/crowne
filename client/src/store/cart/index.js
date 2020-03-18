import types from './types'
import { addItemToCart, removeItemFromCart } from './utils'

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
		case types.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, payload)
			}
		case types.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id !== payload.id)
			}
		case types.CLEAR_CART:
			return {
				...state,
				cartItems: []
			}

		default:
			return state
	}
}

export default cartReducer