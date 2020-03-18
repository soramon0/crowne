import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleCartHidden } from '../../store/cart/actions'
import { selectCartItemsCount } from '../../store/cart/selectors'
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './header.styles';

function CartIcon() {
	const dispatch = useDispatch()
	const itemsCount = useSelector(selectCartItemsCount)

	const toggleCart = () => {		
		dispatch(toggleCartHidden())
	}

	return (
		<CartContainer onClick={toggleCart}>
			<ShoppingIcon />
			<ItemCountContainer>{itemsCount}</ItemCountContainer>
		</CartContainer>
	)
}

export default CartIcon
