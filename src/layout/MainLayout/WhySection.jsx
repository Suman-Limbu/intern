import { Check, CreditCard, RotateCcw, Van } from 'lucide-react';
import React from 'react'

const WhySection = () => {
  return (
    <>
   <div className="flex flex-col items-center justify-center pt-15">
     <h1 className="text-3xl font-bold">Why Choose Us?</h1>
    <p className="text-2xl pt-5 text-gray-500">We provide the best shopping experience with our premium quality products.</p>
   </div>
  <div className="container mx-auto px-5 pt-2">
     <div className="grid grid-cols-4 gap-4 pt-8 ">
   <div className="bg-gray-300 rounded-md  hover:shadow-lg  flex flex-col justify-center items-center">
     <p className="pb-3 pt-3"><Check/></p>
     <h1 className="text-2xl font-semibold pb-3">Quality Products</h1>
    <p className="pl-6">We provide only the best quality products from the trusted suppliers.</p>
   </div>
    <div className="bg-gray-300 rounded-md hover:shadow-lg flex flex-col justify-center items-center">
      <p className="pb-3"><Van/></p>
     <h1 className="text-2xl font-semibold pb-3">Fast Delivery</h1>
    <p className="pl-6">Get your orders delivered in your record time.</p>
   </div>
    <div className="bg-gray-300 rounded-md hover:shadow-lg  flex flex-col justify-center items-center">
     <p className="pb-3"><RotateCcw /></p>
     <h1 className="text-2xl font-semibold pb-3">Easy Return</h1>
    <p className="pl-6">No need to hustle for returning your products if not upto your expectations.</p>
   </div>
    <div className="bg-gray-300 rounded-md hover:shadow-lg flex flex-col justify-center items-center">
      <p className="pb-3"><CreditCard /></p>
     <h1 className="text-2xl font-semibold pb-3">Secure Payment</h1>
    <p className="pl-6">Shop with confidence using your secure payment methods and also with multiple payment options.</p>
   </div>
   </div>
  </div>
    </>
  )
}

export default WhySection;
