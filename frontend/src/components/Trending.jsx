import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Trending() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal & form states
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        let res = await axios.get("https://hs-jewellery.vercel.app/category/get");
        let first3Categ = res.data.categories.slice(0, 3);

        let allProducts = [];

        first3Categ.forEach((category) => {
          let imagesData = category.images;

          let combined = imagesData.details.slice(0, 4).map((item, index) => ({
            ...item,
            image: imagesData.urls[index],
          }));

          allProducts = [...allProducts, ...combined];
        });

        setProducts(allProducts);
        setLoading(false);
      } catch (error) {
        console.log("Error Fetching Images", error);
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // reset quantity
    setAddress(""); // reset address
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Toastify notification
    toast.success(`Order placed for ${selectedProduct.name} x${quantity}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log("Order placed:", { selectedProduct, quantity, address });
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="loader border-t-4 border-b-4 border-gray-900 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Toast container */}
      <ToastContainer />

      <h2 className="text-4xl font-serif my-4 ml-4">Trending Now</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.slice(0, 12).map((item, i) => (
          <div
            key={i}
            className="cursor-pointer border border-gray-200 rounded-md hover:border-gray-500 transition-all duration-300 ease-in-out overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-96 w-full transition-transform duration-500 ease-in-out transform hover:scale-101"
            />
            <div className="flex justify-between items-center p-4">
              <div>
                <p className="font-serif">{item.name}</p>
                <p className="mt-1">₹ {item.price}</p>
              </div>
              <button
                onClick={() => handleBuyNow(item)}
                className="bg-gradient-to-r from-[#f4d7c2] to-[#FFE2F0] text-black font-serif text-xs px-2 py-1 rounded cursor-pointer hover:from-[#ffd1a8] hover:to-[#ffc7de] transition-all duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {showForm && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-serif mb-4 text-center">Order Details</h3>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="h-48 w-full object-cover rounded mb-3"
            />
            <p className="text-lg font-serif">{selectedProduct.name}</p>
            <p className="text-gray-600 mb-4">₹ {selectedProduct.price}</p>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-semibold mb-1">Quantity:</label>
                <div className="flex items-center gap-2 w-full">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-all"
                  >
                    <FaMinus className="text-sm" />
                  </button>

                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="border border-gray-300 rounded px-3 py-1 text-center flex-1"
                  />

                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-all"
                  >
                    <FaPlus className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold mb-1">Address:</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full address"
                  className="border border-gray-300 rounded px-2 py-1 w-full h-20 resize-none"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition-all"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-[#A58A6C] text-white px-4 py-2 rounded hover:bg-[#8c6f53] transition-all"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View All */}
      <div className="flex justify-center">
        <button className="bg-[#A58A6C] px-8 py-3 text-white rounded-md cursor-pointer hover:bg-[#8c6f53] transition-colors duration-300">
          View all
        </button>
      </div>
    </div>
  );
}

export default Trending;
