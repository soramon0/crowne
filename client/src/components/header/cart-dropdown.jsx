import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CartItem from './cart-item';
import { selectCartItems } from '../../store/cart/selectors'
import { toggleCartHidden } from '../../store/cart/actions'
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './header.styles';

function CartDropdown({ history }) {
	const dispatch = useDispatch()
	const items = useSelector(selectCartItems)

	const goToCheckout = () => {
		history.push('/checkout')
		dispatch(toggleCartHidden())
	}

	return (
		<CartDropdownContainer>
			<CartItemsContainer>
				{
					items.length ?
					items.map(item => <CartItem key={item.id} item={item} />) :
					<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
				}
			</CartItemsContainer>
			<CartDropdownButton onClick={goToCheckout}>GO TO CHECKOUT</CartDropdownButton>
		</CartDropdownContainer>
	)
}

export default withRouter(CartDropdown)
