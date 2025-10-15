import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Userprofile = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/signin');
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get('https://hs-jewellery.vercel.app/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setError("Failed to load user profile.");
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/');
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="loader border-t-4 border-b-4 border-green-900 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-[#FFE5D3] to-[#FFE2F0] p-6 rounded-2xl shadow-lg max-w-sm mx-auto my-10">
      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-gray-400 text-6xl font-bold mb-4 shadow-inner">
        {user.name.charAt(0)}
      </div>

      <h2 className="text-2xl font-bold text-black mb-2">{user.name}</h2>
      <p className="text-black text-sm opacity-80">{user.email}</p>
      <button onClick={handleLogout} className="bg-white rounded-2xl cursor-pointer px-4 py-1 mt-4">
        Log Out
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Userprofile;
