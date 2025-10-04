import axios from "axios";
import { useState } from "react";

function Addcategory() {
  const [cateName, setCateName] = useState("");
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [items, setItems] = useState([]); // har image ke liye name & price

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    // har image ke liye ek name & price field create karo
    setItems(files.map(() => ({ name: "", price: "" })));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length !== items.length) {
      alert("Please fill all names and prices for selected images");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", cateName);
      formData.append("description", desc);

      images.forEach((img) => formData.append("images", img));
      items.forEach((item, idx) => {
        formData.append(`itemNames[${idx}]`, item.name);
        formData.append(`itemPrices[${idx}]`, item.price);
      });

      await axios.post("http://localhost:3000/category/add", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Category added successfully!");
      setCateName("");
      setDesc("");
      setImages([]);
      setItems([]);
    } catch (error) {
      console.error(error);
      alert("Failed to add category");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-[#f8dcdb] via-white to-[#f8dcdb]">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-[#c39e9c] font-serif">
          Add Category
        </h2>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Category Name</label>
          <input
            type="text"
            value={cateName}
            onChange={(e) => setCateName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter category name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Enter description"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-semibold text-gray-700">Upload Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            required
            className="px-3 py-2 border border-gray-300 rounded-lg cursor-pointer file:bg-[#f8dcdb] file:text-black file:rounded-md file:px-4 file:py-2"
          />
          <p className="text-sm text-gray-500">{images.length} file(s) selected</p>
        </div>

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
                type="text"
                value={item.price}
                onChange={(e) => handleItemChange(idx, "price", e.target.value)}
                placeholder={`Price ${idx + 1}`}
                required
                className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
          ))}

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-[#f8dcdb] text-black font-semibold py-3 rounded-lg shadow-md cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addcategory;
