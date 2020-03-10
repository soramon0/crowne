import React from 'react'

import CustomButton from './shared/custom-button';

import '../styles/cart-dropdown.scss';

function CartDropdown() {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items' />
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

export default CartDropdown
