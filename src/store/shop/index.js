import SHOP_DATA from '../../constants/shopData'

const initial_state = {
	collections: SHOP_DATA
}

const shopReducer = (state = initial_state, { type }) => {	
	switch (type) {
		default:
			return state
	}
}

export default shopReducer