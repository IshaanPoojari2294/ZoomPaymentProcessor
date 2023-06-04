export default function CheckoutScreen() {
    return (
    <div>
    {/* <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      <a href="#" class="text-2xl font-bold text-gray-800">sneekpeeks</a>
      <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <div class="relative">
          <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
            <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
                ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
              ></a>
              <span class="font-semibold text-gray-900">Shop</span>
            </li>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
              <span class="font-semibold text-gray-900">Shipping</span>
            </li>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <li class="flex items-center space-x-3 text-left sm:space-x-4">
              <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
              <span class="font-semibold text-gray-500">Payment</span>
            </li>
          </ul>
        </div>
      </div>
    </div> */}

    <div class=" text-black rounded-xl shadow-xl py-6"> {/*grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32*/}
      <div class="px-4 pt-2">
        <p class="text-xl font-medium">Order Summary</p>
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

        <p class="mt-8 text-lg font-medium">Shipping Methods</p>
        <form class="mt-5 grid gap-6">
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
      </div>
      <button class="my-4 mx-auto rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Go to Payment</button>
    </div>

    
    </div>
  )
}