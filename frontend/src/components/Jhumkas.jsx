import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Jhumkas() {

  const navigate = useNavigate()

  const [jumka, setJumka] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Modal & form states
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchJumka = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://hs-jewellery.vercel.app/category/get");
        const selected = res.data.categories[4].images;

        let needed = selected.details.map((detail, index) => ({
          name: detail.name,
          price: detail.price,
          image: selected.urls[index],
        }));

        setJumka(needed);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };
    fetchJumka();
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
      <div className="flex justify-center items-center h-96">
        <div className="loader border-t-4 border-b-4 border-green-900 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-4xl ml-4 py-10 font-serif">Jhumkas</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jumka.slice(0, 8).map((src, i) => (
            <div
              key={i}
              className="cursor-pointer border border-gray-200 rounded-md hover:border-gray-500 transition-all duration-300 ease-in-out overflow-hidden"
            >
              <img
                src={src.image}
                alt={src.name}
                className="h-96 w-full rounded-t-md transition-transform duration-500 ease-in-out transform hover:scale-101"
              />
              <button className="bg-green-950 text-white px-3 py-1 rounded-md relative left-2 bottom-8 text-sm">
                Sale
              </button>
              <p className="mt-2 ml-5 font-serif">{src.name}</p>
              <div className="flex justify-between items-center px-5">
                <p className="my-3">₹{src.price}</p>
                <button
                  onClick={() => handleBuyNow(src)}
                  className="bg-gradient-to-r from-[#f4d7c2] to-[#FFE2F0] text-black font-serif text-xs px-2 py-1 rounded cursor-pointer hover:from-[#ffd1a8] hover:to-[#ffc7de] transition-all duration-300"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-8">
          <button onClick={()=>navigate('/jumka')} className="bg-[#A58A6C] text-white px-8 py-3 rounded-md cursor-pointer">
            View all
          </button>
        </div>
      </div>

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
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your full address"
                className="border border-gray-300 rounded px-2 py-1 w-full h-20 resize-none"
                required
              />
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
    </>
  );
}

export default Jhumkas;
