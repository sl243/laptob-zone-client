import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();
    const {price} = order;
    return (
        <div>
            <h2 className='text-3xl mb-6 mt-5'>Provide Your Payment Information</h2>
            <p className='text-xl'>
                Please Pay <strong>${price}</strong> for your order product.
            </p>
            <div className='w-96 my-12 text-center'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm 
                        order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;