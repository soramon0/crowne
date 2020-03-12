import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeButton({ price }) {
	const priceForStripe = price * 100
	const publishableKey = 'pk_test_fBg4UpaafTUymyj55ntoEwtX006bjGcTxZ'

	const onToken = token => {
		console.log(token);
		alert('Payment successful')
	}

	return (
		<StripeCheckout 
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeButton