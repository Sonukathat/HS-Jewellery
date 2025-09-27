import { useEffect, useState } from "react";
import axios from "axios";

const AllUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");

                const res = await axios.get("http://localhost:5000/users/alluser", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // console.log(res.data.users)
                setUsers(res.data.users);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch users");
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading users...</p>;


    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
            <h1 className="text-2xl font-bold mb-6">All Users</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {users.map((user) => (

                    <div
                        key={user._id}
                        className="flex flex-col items-start bg-gradient-to-r from-white via-[#f8dcdb] to-white p-5 rounded-xl shadow-md"
                    >
                        <p className="text-md font-medium">Name : {user.name}</p>
                        <p className="text-gray-600 text-sm">Email : {user.email}</p>
                        <p className="text-gray-500 text-sm break-all">Password : {user.password}</p>
                        <p className="text-gray-500 text-sm">Role : {user.isAdmin ? "Admin" : "User"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllUser;
