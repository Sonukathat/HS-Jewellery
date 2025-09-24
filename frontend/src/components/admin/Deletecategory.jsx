import { useState } from "react";
import axios from "axios";

function DeleteCategoryByName() {
    const [name, setName] = useState("");

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!name) return alert("Please enter a category name");

        const confirmDelete = window.confirm(`Are you sure you want to delete "${name}"?`);
        if (!confirmDelete) return;

        try {
            // Using params in URL
            const res = await axios.delete(`http://localhost:5000/category/deleteByName/${name}`);
            alert(res.data.message);
            setName(""); // reset input
        } catch (error) {
            console.error(error);
            alert("Delete failed!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#f8dcdb] via-white to-[#f8dcdb]">
            <form
                onSubmit={handleDelete}
                className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
            >
                <h2 className="text-3xl font-bold text-center text-[#c39e9c] font-serif">
                    Delete Category
                </h2>

                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                        placeholder="Enter category name"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg shadow-md cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DeleteCategoryByName;
