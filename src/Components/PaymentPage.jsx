import React from 'react';
const stripePromise = loadStripe('pk_test_51MArUhHTpDDkKba6z5Ncrv1QNzGFJiCihhnSE3ntAWAIHMEWjMD1yufZp70Jet3XDvbZCI5ndLtoBBrYinOIwBdO00Aq7ljP8C');
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';

const PaymentPage = () => {


const data = useLoaderData()
console.log(data)





    useEffect(()=>{
        fetch(`http://localhost:5000/create-payment-intent`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setClientSecret(data.clientSecret)
        })
        .catch(e => console.error(e))
    }, [price])




    return (
        <div className='my-16'>
                            <Elements stripe={stripePromise}>
                                <PaymentForm
                                // booking={booking}
                                ></PaymentForm>
                            </Elements>
                        </div>
    );
};

export default PaymentPage;