import { useNavigate } from "react-router-dom";

function Admin() {

    const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#f4e8e7] via-white to-[#f8dcdb] p-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#c39e9c] mb-8 text-center">
        Admin Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        <button onClick={()=>navigate('/addcategory')} className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition duration-300 w-full">
          ADD CATEGORY
        </button>

        <button className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition duration-300 w-full">
          DELETE CATEGORY
        </button>

        <button onClick={()=>navigate('/updatecategory')} className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition duration-300 w-full">
          UPDATE CATEGORY
        </button>

        <button onClick={()=>navigate('/getcategory')} className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition duration-300 w-full">
          SEE CATEGORY
        </button>
      </div>
    </div>
  );
}

export default Admin;
