import axios from "axios";
import { useState } from "react";

function UpdateCategory() {
  const [oldName, setOldName] = useState(""); // target category
  const [newName, setNewName] = useState(""); // new category name
  const [description, setDescription] = useState(""); // category description
  const [images, setImages] = useState([]); // uploaded images
  const [items, setItems] = useState([]); // har image ke liye name & price

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    // Har image ke liye ek empty name/price entry
    setItems(files.map(() => ({ name: "", price: "" })));
  };

  // Handle name/price change for each image
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!oldName) return alert("Please enter the current category name");
    if (!newName) return alert("Please enter the new category name");

    if (images.length !== items.length) {
      return alert("Please fill all names and prices for selected images");
    }

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      formData.append("oldName", oldName);
      formData.append("newName", newName);
      formData.append("description", description);

      // Add images
      images.forEach((img) => formData.append("images", img));

      // Add items (array me bhejna)
      items.forEach((item) => {
        formData.append("itemNames", item.name);
        formData.append("itemPrices", item.price);
      });

      await axios.put("https://machki.vercel.app/category/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Category updated successfully!");
      setOldName("");
      setNewName("");
      setDescription("");
      setImages([]);
      setItems([]);
      console.log("Sending Items:", items);

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

        {/* Old Category Name */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">
            Current Category Name
          </label>
          <input
            type="text"
            value={oldName}
            onChange={(e) => setOldName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter current category name"
            required
          />
        </div>

        {/* New Category Name */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">
            New Category Name
          </label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter new category name"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">
            Category Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter category description"
          />
        </div>

        {/* Upload Images */}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">
            Upload New Images
          </label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="px-3 py-2 border border-gray-300 rounded-lg cursor-pointer file:bg-[#f8dcdb] file:text-black file:rounded-md file:px-4 file:py-2"
          />
          <p className="text-sm text-gray-500">{images.length} file(s) selected</p>
        </div>

        {/* Dynamic Name & Price Inputs */}
        {items.length > 0 &&
          items.map((item, idx) => (
            <div key={idx} className="flex gap-2">
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleItemChange(idx, "name", e.target.value)}
                placeholder={`Name ${idx + 1}`}
                required
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
              <input
                type="number"
                value={item.price}
                onChange={(e) => handleItemChange(idx, "price", e.target.value)}
                placeholder={`Price ${idx + 1}`}
                required
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
          ))}

        {/* Submit Button */}
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

export default UpdateCategory;
