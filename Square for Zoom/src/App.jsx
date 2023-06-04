import React from 'react'
import CheckoutForm from './components/CheckoutForm'
import CheckoutScreen from './components/CheckoutScreen'

export default function App() {
  return (
    // <div className="flex flex-row justify-center">
      <div className="flex flex-col justify-center items-center w-screen my-8">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/square-payments-logo-png-transparent-background-vertical.png" alt="Square for Zoom" className="w-40" />
        {/* <h1 className="text-black">Checkout</h1> */}
        {/* <CheckoutScreen /> */}
        <CheckoutForm />
     </div>
  )
}