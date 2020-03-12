import React from 'react'
import { useSelector } from 'react-redux'

import { selectCartItems, selectCartTotal } from '../../store/cart/selectors'
import CheckoutItem from './checkout-item'
import StripeButton from '../shared/stripe-button'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

function CheckoutPage() {
	const items = useSelector(selectCartItems)
	const total = useSelector(selectCartTotal)

	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			{
				items.map(item => <CheckoutItem key={item.id} item={item} />)
			}
			<TotalContainer>Total: {total}</TotalContainer>
			<WarningContainer>
				*Please use the follwing test credit for payments*
				<br/>
				4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
			</WarningContainer>
			<StripeButton price={total} />
		</CheckoutPageContainer>
	)
}

export default CheckoutPage
