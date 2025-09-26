import { useState } from "react";
import axios from "axios";

function UpdateCategoryByName() {
  const [formData, setFormData] = useState({
    oldName: "",       // Target category
    newName: "",       // New name
    description: "",
    nameprice: "",
    image: null,
  });

  // Handle input change
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

    if (!formData.oldName) return alert("Please enter the category to update");

    const data = new FormData();
    data.append("oldName", formData.oldName);
    data.append("name", formData.newName);
    data.append("description", formData.description);
    data.append("nameprice", formData.nameprice);
    if (formData.image) data.append("image", formData.image);

    try {
      await axios.put("http://localhost:5000/category/updateByName", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Category updated successfully!");
      setFormData({
        oldName: "",
        newName: "",
        description: "",
        nameprice: "",
        image: null,
      });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Update failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#f8dcdb] via-white to-[#f8dcdb]">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#c39e9c] font-serif">
          Update Category
        </h2>

        <div className="flex flex-col">
          <label htmlFor="oldName" className="mb-2 font-semibold text-gray-700">
            Current Category Name
          </label>
          <input
            type="text"
            id="oldName"
            value={formData.oldName}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter category to update"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="newName" className="mb-2 font-semibold text-gray-700">
            New Category Name
          </label>
          <input
            type="text"
            id="newName"
            value={formData.newName}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter new category name"
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
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter description"
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
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Eg. Ring - ₹1200"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="mb-2 font-semibold text-gray-700">
            Upload New Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleFileChange}
            className="px-3 py-2 border border-gray-300 rounded-lg cursor-pointer file:bg-[#f8dcdb] file:text-black file:rounded-md file:px-4 file:py-2"
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

export default UpdateCategoryByName;
