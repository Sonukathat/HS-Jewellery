import { useState } from "react";
import axios from "axios";

function CreateOrder() {
  const [orderItems, setOrderItems] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const handleOrder = async (e) => {
    e.preventDefault(); // form submit default behavior stop

    try {
      const itemsArray = orderItems.split(",").map(item => item.trim());

      const res = await axios.post(
        "http://localhost:5000/order/add", // backend endpoint
        { orderItems: itemsArray, shippingAddress }
      );

      if (res.data.success) {
        alert("Order placed successfully!");
        setOrderItems("");
        setShippingAddress("");
      }
    } catch (error) {
      console.log("Error:", error.response?.data?.message || error.message);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <form onSubmit={handleOrder} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="text"
          placeholder="Order Items (comma separated)"
          value={orderItems}
          onChange={(e) => setOrderItems(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Shipping Address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CreateOrder;
