import React, { useState } from 'react';


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const PaymentForm = () => {
    const [clientSecret, setClientSecret] = useState(""); 
    const [error, setError] = useState('')
    const [sucess, setSuccess] = useState('')

    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }
    
    
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });


          if(error){
            setError(error.message)
          }
          else{
            setError('')
          }



          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email
                },
              },
            },
          );

          if(confirmError){
            setError(confirmError.message)
          }

          console.log(paymentIntent)
          if(paymentIntent.status === "succeeded"){
            setSuccess('sucessful payment')
            setTax(paymentIntent.id)

            const pay ={
              bookingId: _id,
              price,
              email
            }
            
            fetch('https://resale-car-server-12.vercel.app/payment',{
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(pay)
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data)
            })
            .catch(e => console.error(e))
          }
          

    }






    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button className='btn btn-xs  bg-gradient-to-r from-blue-600 to-blue-600 my-10' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className="text-red-600">{error}</p>
            {
                sucess && <>
                <p className="text-green-600 font-bold">{sucess}</p>
                <p className="text-green-600 font-bold">{tax}</p>
                </>
            }
        </div>
    );
};

export default PaymentForm;