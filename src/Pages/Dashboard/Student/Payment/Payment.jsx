import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import { Helmet } from 'react-helmet';



const stripePromise = loadStripe('pk_test_51NIje4DB6W9BR5Mapa9PaOwvxTHUQwRdyvBHnAFR5SrpK5FcVc5XUyJ77VMg5FEt0zSSGtVMX703ArlsSxSVg6Zw00427w9SYZ');
const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Payment History - Sportopia Summer Camp</title>
            </Helmet>
            <h1 className='text-3xl font-semibold'>Please Process The Payment</h1>

            <Elements stripe={stripePromise}>
                <CheckOut />
            </Elements>
        </div>
    );
};

export default Payment;