import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_fBg4UpaafTUymyj55ntoEwtX006bjGcTxZ';

  const onToken = async token => {
    try {
      const res = await axios.post('http://localhost:5000/payment', {
        amount: priceForStripe,
        token
      });
      console.log('Payment Successful:', res);
      alert('Payment Successful');
    } catch (error) {
      console.log('Payment Erorr:', error);
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card.'
      );
    }
  };

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
  );
}

export default StripeButton;
