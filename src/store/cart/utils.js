export function addItemToCart(cartItems, itemToAdd) {
	const exists = cartItems.find(item => item.id === itemToAdd.id)

	if (exists) {
		return cartItems.map(item => item.id !== itemToAdd.id ? item : { ...item, quantity: item.quantity + 1 })
	}

	return [...cartItems, {...itemToAdd, quantity: 1}]
}

export function removeItemFromCart(cartItems, itemToRemove) {
	const exists = cartItems.find(item => item.id === itemToRemove.id)

	if (exists.quantity === 1) {
		return cartItems.filter(item => item.id !== itemToRemove.id)
	}

	return cartItems.map(item => item.id !== itemToRemove.id ? item : { ...item, quantity: item.quantity - 1 })
}