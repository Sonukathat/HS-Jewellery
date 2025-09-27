import axios from "axios";
import { useEffect, useState } from "react";

const Userprofile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get('http://localhost:5000/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(res.data.data);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchUser();
    }, []);

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
        </div>
    );
};

export default Userprofile;
