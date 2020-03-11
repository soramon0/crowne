import React from 'react'
import { useDispatch } from 'react-redux'

import '../styles/checkout-item.scss'
import { clearItemFromCart, addItem, removeItem } from '../store/cart/actions'

function CheckoutItem({ item }) {
	const dispatch = useDispatch()

	const clearItem = () => {
		dispatch(clearItemFromCart(item))
	}

	const { name, imageUrl, price, quantity} = item
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className="arrow" onClick={() => dispatch(removeItem(item))}>&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => dispatch(addItem(item))}>&#10095;</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={clearItem}>&#10005;</div>
		</div>
	)
}

export default CheckoutItem
