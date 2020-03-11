import React from 'react'
import { useSelector } from 'react-redux'

import '../styles/checkoutpage.scss'
import { selectCartItems, selectCartTotal } from '../store/cart/selectors'
import CheckoutItem from '../components/checkout-item'

function Checkoutpage() {
	const items = useSelector(selectCartItems)
	const total = useSelector(selectCartTotal)

	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{
				items.map(item => <CheckoutItem key={item.id} item={item} />)
			}
			<div className="total">
				<span>Total: {total}</span>
			</div>
		</div>
	)
}

export default Checkoutpage
