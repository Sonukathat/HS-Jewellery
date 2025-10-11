import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Userprofile = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate('/signin');
                return;
            }

            try {
                const res = await axios.get('https://machki.vercel.app/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(res.data.data);
            } catch (error) {
                console.log("error", error);
                setError("Failed to load user profile.");
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate('/signin');

    }

    if (!user.name || !user.email) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-white via-[#f8dcdb] to-white p-6 rounded-2xl shadow-lg max-w-sm mx-auto my-10">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-gray-400 text-6xl font-bold mb-4 shadow-inner">
                {user.name.charAt(0)}
            </div>

            <h2 className="text-2xl font-bold text-black mb-2">{user.name}</h2>
            <p className="text-black text-sm opacity-80">{user.email}</p>
            <button onClick={handleLogout} className="bg-white rounded-2xl cursor-pointer px-4 py-1 mt-4">Log Out</button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Userprofile;
