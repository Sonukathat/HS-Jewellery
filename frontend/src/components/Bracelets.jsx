import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Bracelets() {
  const [bracelets, setBracelets] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Modal & form states
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchBracelets = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://hs-jewellery.vercel.app/category/get");

        const braceletCategory = res.data.categories[2];

        const braceletItems = braceletCategory.images.urls.map((url, index) => ({
          image: url,
          name: braceletCategory.images.details[index]?.name || "No Name",
          price: braceletCategory.images.details[index]?.price || "N/A",
        }));

        setBracelets(braceletItems);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching bracelets:", err);
        setLoading(false);
      }
    };

    fetchBracelets();
  }, []);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setAddress("");
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    toast.success(`Order placed for ${selectedProduct.name} x${quantity}`, {
      position: "top-right",
      autoClose: 3000,
    });

    console.log("Order data:", { selectedProduct, quantity, address });
    setShowForm(false);
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-96">
          <div className="loader border-t-4 border-b-4 border-green-900 rounded-full w-12 h-12 animate-spin"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <Details
        heading="Bracelets"
        headingimage="https://images.unsplash.com/photo-1723522938779-d434eb9294d4?w=600&auto=format&fit=crop&q=60"
        all={bracelets}
        handleBuyNow={handleBuyNow}
      />

      {/* 🔹 Buy Form Modal */}
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
              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold mb-1">Quantity:</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-all"
                  >
                    <FaMinus />
                  </button>

                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    className="border border-gray-300 px-3 py-1 text-center flex-1 rounded"
                  />

                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="bg-gray-200 p-2 rounded hover:bg-gray-300 transition-all"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>

              {/* Address */}
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your full address"
                className="border border-gray-300 rounded px-2 py-1 w-full h-20 resize-none"
                required
              />

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

      <Footer />
    </>
  );
}

export default Bracelets;
