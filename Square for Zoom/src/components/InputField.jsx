export default function InputField(props) {
  return (
    <div className="relative mt-2">
      <input
        className="w-full px-5 pt-4 pb-1 text-gray-700 bg-gray-200 rounded border border-gray-200 focus:outline-none focus:bg-white focus:border-black transition duration-200 peer"
        id={"cus_"+props.label.toLowerCase()}
        name={"cus_"+props.label.toLowerCase()}
        type={props.type}
        required="true"
        placeholder=" "
        aria-label={props.label}
      />
      <label className="absolute peer-placeholder-shown:text-lg text-gray-400 left-5 peer-placeholder-shown:top-3 peer-focus:text-xs peer-focus:top-1 top-1 text-xs transition-all duration-200" htmlFor="cus_name">
        {props.label}
      </label>
      {/* <div class="invisible text-red-500 ">Error</div> */}
      {props.type == "email" && <p class="mt-2 invisible peer-placeholder-shown:!invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>}
    </div>
  )
}