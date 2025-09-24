import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Updatecategory() {

    const { id } = useParams(); // category id from route
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        nameprice: "",
        image: null
    });

    // Fetch category data for pre-fill
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/category/${id}`);
                setFormData({
                    name: res.data.name || "",
                    description: res.data.description || "",
                    nameprice: res.data.nameprice || "",
                    image: null
                });
            } catch (error) {
                console.error("Error fetching category:", error);
            }
        };
        fetchCategory();
    }, [id]);

    // Handle change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle file change
    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    // Submit update
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("nameprice", formData.nameprice);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            await axios.put(`http://localhost:5000/category/update/${id}`, data, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Category updated successfully!");
            navigate("/"); // redirect to home or category list
        } catch (error) {
            console.error("Error updating category:", error);
            alert("Update failed!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-[#f8dcdb] via-white to-[#f8dcdb]">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
            >
                <h2 className="text-3xl font-bold text-center text-[#c39e9c] font-serif">
                    Update Category
                </h2>
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter category name"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-2 font-semibold text-gray-700">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Enter description"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="image" className="mb-2 font-semibold text-gray-700">
                        Upload New Images
                    </label>
                    <input
                        type="file"
                        id="image"
                        onChange={handleFileChange}
                        className="px-3 py-2 border border-gray-300 rounded-lg cursor-pointer file:bg-[#f8dcdb] file:text-black file:rounded-md file:px-4 file:py-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nameprice" className="mb-2 font-semibold text-gray-700">
                        Name & Price
                    </label>
                    <input
                        type="text"
                        id="nameprice"
                        value={formData.nameprice}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Eg. Ring - ₹1200"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full bg-[#f8dcdb] text-black font-semibold py-3 rounded-lg shadow-md cursor-pointer"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Updatecategory;
