import { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3000/users/alluser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(res.data.users);
        setLoading(false);
      } catch (err) {
        console.error(err.response?.data?.message || "Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:3000/users/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(users.filter((u) => u._id !== id));
    } catch (error) {
      console.error("Delete failed:", error.response?.data?.message || error.message);
    }
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex flex-col items-start bg-gradient-to-r from-white via-[#f8dcdb] to-white p-3 rounded-xl shadow-md"
          >
            <p className="text-md font-medium">Name : {user.name}</p>
            <p className="text-gray-600 text-sm">Email : {user.email}</p>
            <p className="text-gray-500 text-sm break-all">Password : {user.password}</p>
            <p className="text-gray-500 text-sm">Role : {user.isAdmin ? "Admin" : "User"}</p>

            <MdDelete
              className="cursor-pointer text-2xl mt-4 text-red-600 hover:text-red-800"
              onClick={() => handleDelete(user._id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUser;
