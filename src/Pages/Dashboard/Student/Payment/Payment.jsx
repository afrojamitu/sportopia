import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';



const stripePromise = loadStripe('pk_test_51NIje4DB6W9BR5Mapa9PaOwvxTHUQwRdyvBHnAFR5SrpK5FcVc5XUyJ77VMg5FEt0zSSGtVMX703ArlsSxSVg6Zw00427w9SYZ');
const Payment = () => {
    return (
        <div>
            <h1 className='text-2xl'>payments here</h1>

            <Elements stripe={stripePromise}>
                <CheckOut />
            </Elements>
        </div>
    );
};

export default Payment;