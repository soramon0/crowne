export function addItemToCart(cartItems, itemToAdd) {
	const exists = cartItems.find(item => item.id === itemToAdd.id)

	if (exists) {
		return cartItems.map(item => item.id !== itemToAdd.id ? item : { ...item, quantity: item.quantity + 1 })
	}

	return [...cartItems, {...itemToAdd, quantity: 1}]
}