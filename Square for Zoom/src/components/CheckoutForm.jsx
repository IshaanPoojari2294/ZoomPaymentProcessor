import React from 'react'
import InputField from './InputField'

export default function CheckoutForm() {
  return (
  <div className="leading-loose">
    <div className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">

      <div class=" pt-2 text-black">
        <h1 class="text-xl font-medium">Order Summary</h1>
        <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
        <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          <div class="flex flex-col rounded-lg bg-white sm:flex-row">
            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
              <span class="float-right text-gray-400">42EU - 8.5US</span>
              <p class="text-lg font-bold">$138.99</p>
            </div>
          </div>
          <div class="flex flex-col rounded-lg bg-white sm:flex-row">
            <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <div class="flex w-full flex-col px-4 py-4">
              <span class="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
              <span class="float-right text-gray-400">42EU - 8.5US</span>
              <p class="mt-auto text-lg font-bold">$238.99</p>
            </div>
          </div>
        </div>
      </div>

      <h1 class="mt-8 text-lg font-medium text-black">Shipping Methods</h1>
      <form class="mt-5 grid gap-6 text-black ">
        <div class="relative">
          <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
          <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
          <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
            <img class="w-14 object-contain" src="https://justledus.com/wp-content/uploads/2015/10/FedEx-logo.png" alt="" />
            <div class="ml-5">
              <span class="mt-2 font-semibold">Fedex Delivery</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
            </div>
          </label>
        </div>
        <div class="relative">
          <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
          <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
          <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
            <img class="w-14 object-contain" src="https://logos-world.net/wp-content/uploads/2020/08/DHL-Symbol.png" alt="" />
            <div class="ml-5">
              <span class="mt-2 font-semibold">DHL Delivery</span>
              <p class="text-slate-500 text-sm leading-6">Delivery: 6-8 Days</p>
            </div>
          </label>
        </div>
      </form>

      <h1 class="mt-8 text-lg font-medium text-black">Payment Details</h1>
      <form >
        {/* <h2 className="text-gray-800 font-medium">Customer information</h2> */}
        <InputField label="Name" type="text"/>
        <InputField label="Email" type="email"/>
        {/* <br></br> */}
        <InputField label="Street" type="text"/>
        <InputField label="City" type="text"/>

        <div className="inline-block w-1/2 pr-1">
          <InputField label="Country" type="text"/>
        </div>
        <div className="inline-block -mx-1 pl-1 w-1/2">
          <InputField label="Zip" type="text"/>
        </div>

        {/* <h2 className="mt-4 text-gray-800 font-medium">Payment information</h2> */}
        <div className="h-6"></div>
        <InputField label="Card Number" type="text"/>
        <div className="inline-block w-1/2 pr-1">
          <InputField label="MM/YY" type="text"/>
        </div>
        <div className="inline-block -mx-1 pl-1 w-1/2">
          <InputField label="CVC" type="text"/>
        </div>

      </form>

      {/* <!-- Total --> */}
      <div class="mt-6 border-t border-b py-2">
        <div class="flex items-center justify-between">
          <p class="text-md font-medium text-gray-900">Subtotal</p>
          <p class="font-semibold text-gray-900">$399.00</p>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-md font-medium text-gray-900">Shipping</p>
          <p class="font-semibold text-gray-900">$8.00</p>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <p class="text-md font-medium text-gray-900">Total</p>
        <p class="text-2xl font-semibold text-gray-900">$407.00</p>
      </div>

      <div className="mt-4">
          <button
            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="submit"
          >
            Confirm and Pay
          </button>
        </div>
    </div>

    
  </div>
  )
}