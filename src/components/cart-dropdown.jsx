import React from 'react'

import '../styles/cart-dropdown.scss';
import CustomButton from './shared/custom-button';
import CartItem from './cart-item';
import { useSelector } from 'react-redux'
import { selectCartItems } from '../store/cart/selectors'

function CartDropdown() {
	const items = useSelector(selectCartItems)

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{items.map(item => <CartItem key={item.id} item={item} />)}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

export default CartDropdown
