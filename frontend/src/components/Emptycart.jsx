import { Link } from "react-router-dom"

function Emptycart() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <div>
        <h2 className="text-3xl">Your cart is empty</h2>
      </div>
      <div>
        <button className="bg-gray-800 px-8 py-3 text-white rounded-md">Continue shopping</button>
      </div>
      <div>
        <h2 className="text-xl">Have an account?</h2>
        <p className="text-md"><Link to="/signin" className="border-b hover:border-b-3">Log in</Link> to check out faster.</p>
      </div>
    </div>
  )
}

export default Emptycart
