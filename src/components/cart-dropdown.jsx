import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import '../styles/cart-dropdown.scss';
import CustomButton from './shared/custom-button';
import CartItem from './cart-item';
import { selectCartItems } from '../store/cart/selectors'
import { toggleCartHidden } from '../store/cart/actions'

function CartDropdown({ history }) {
	const dispatch = useDispatch()
	const items = useSelector(selectCartItems)

	const goToCheckout = () => {
		history.push('/checkout')
		dispatch(toggleCartHidden())
	}

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					items.length ?
					items.map(item => <CartItem key={item.id} item={item} />) :
					<span className="empty-message">Your cart is empty</span>
				}
			</div>
			<CustomButton onClick={goToCheckout}>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

export default withRouter(CartDropdown)
