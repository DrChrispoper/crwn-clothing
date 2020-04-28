import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_lkk6CdGahWSufWNkUGbGZawS00Frt1QJ9J';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Chrish Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is £${price}`}
      currency='GBP'
      amount={priceForStripe}
      panelLabel='Pay Now'
      stripeKey={publishableKey}
      token={onToken}
    />
  );
};

export default StripCheckoutButton;
