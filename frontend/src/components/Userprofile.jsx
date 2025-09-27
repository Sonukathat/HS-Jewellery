import { useEffect, useState } from "react";
import axios from "axios";

const Userprofile = () => {
  const [user, setUser] = useState(null); // user data
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // frontend me token save hota hai login ke baad
        const res = await axios.get("http://localhost:5000/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`, // token header me bhejna zaroori hai
          },
        });

        setUser(res.data.data); // backend se aaya user data
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-5xl font-bold mb-4">
        {user.name.charAt(0)}
      </div>
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default Userprofile;
