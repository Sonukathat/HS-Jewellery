import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#f4e8e7] via-white to-[#f8dcdb] p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#c39e9c] mb-12 text-center">
        Admin Dashboard
      </h1>

      <div className="w-full max-w-6xl mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Category Section
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button onClick={() => navigate('/addcategory')} className="w-full h-15 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300">
            ADD CATEGORY
          </button>
          <button onClick={() => navigate('/deletecategory')} className="w-full h-15 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300">
            DELETE CATEGORY
          </button>
          <button onClick={() => navigate('/updatecategory')} className="w-full h-15 cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300">
            UPDATE CATEGORY
          </button>
          <button onClick={() => navigate('/getcategory')} className="w-full h-15 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300">
            SEE CATEGORY
          </button>
        </div>
      </div>

      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          User Section
        </h2>
        <div className="flex justify-center">
          <button onClick={() => navigate('/all-users')} className="w-full sm:w-1/2 h-15 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition duration-300">
            REGISTERED USERS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
