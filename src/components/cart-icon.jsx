import React from 'react'

import '../styles/cart-icon.scss'
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import { useDispatch } from 'react-redux'
import { toggleCartHidden } from '../store/cart/actions'
import { useSelector } from 'react-redux'
import { selectCartItemsCount } from '../store/cart/selectors'

function CartIcon() {
	const dispatch = useDispatch()
	const itemsCount = useSelector(selectCartItemsCount)

	const toggleCart = () => {		
		dispatch(toggleCartHidden())
	}

	return (
		<div className='cart-icon' onClick={toggleCart}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemsCount}</span>
		</div>
	)
}

export default CartIcon
