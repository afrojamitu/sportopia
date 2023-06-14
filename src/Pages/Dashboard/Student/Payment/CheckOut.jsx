import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

const CheckOut = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setCardError(error.message)
            console.log('error', error);
          } else {
            setCardError('')
            console.log('PaymentMethod', paymentMethod);
          }
        };

    return (
        <form className='mt-10' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='px-3 py-1 rounded bg-gray-600 hover:opacity-70 font-bold text-lg text-white mt-5' disabled={!stripe}>
                Pay
            </button>
           {cardError && <p className="text-red-600">{cardError}</p>}
        </form>
    );
};

export default CheckOut;