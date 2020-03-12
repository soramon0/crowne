import React from 'react'
import { useSelector } from 'react-redux'

import '../styles/checkoutpage.scss'
import { selectCartItems, selectCartTotal } from '../store/cart/selectors'
import CheckoutItem from '../components/checkout-item'
import StripeButton from '../components/shared/stripe-button'

function CheckoutPage() {
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
			<div className="test-warning">
				*Please use the follwing test credit for payments*
				<br/>
				4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
			</div>
			<StripeButton price={total} />
		</div>
	)
}

export default CheckoutPage
