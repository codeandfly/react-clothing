import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ibQ3EWrAcD7hBSLsFZ0k0DiW00RrNuLfAm';

  const onToken = token => {
    console.log(token);
    alert('Payment Sucessful')
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      // image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken} // on success callback
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;