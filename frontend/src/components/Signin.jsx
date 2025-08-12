
function Signin() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="rounded-lg bg-white p-10 flex flex-col gap-8 w-72 sm:w-[25rem]">
        <div className="flex justify-center">
            <h2 className="text-xl">MACHKI</h2>
        </div>
        <div>
            <h2 className="text-xl font-bold">Sign in</h2>
            <p className="text-sm text-gray-600">Enter your email and we'll send you a verification code</p>
        </div>
        <div className="flex flex-col gap-4">
            <input className="border border-gray-300 px-4 py-2 rounded-md " type="text" placeholder="Email" />
            <button className="bg-blue-800 cursor-pointer py-3 text-white rounded-md">Continue</button>
        </div>
        <div className="flex gap-4 text-sm text-blue-500">
            <a className="hover:underline" href="#">Privacy policy</a>
            <a className="hover:underline" href="#">Terms of service</a>
        </div>
      </div>
    </div>
  )
}

export default Signin
