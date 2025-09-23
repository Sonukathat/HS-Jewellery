import { useEffect, useState } from "react";
import axios from "axios";

function GetCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category/get");

        // Data format karna
        const formatted = res.data.categories.map((cat) => ({
          name: cat.name,
          items:
            cat.images?.details?.flat().map((item) => ({
              ...item,
              // base URL add karo
              image: `http://localhost:5000/${item.urls}`,
            })) || [],
        }));
        console.log(formatted)
        setCategories(formatted);
        // console.log(formatted)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategory();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">{cat.name}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cat.items.map((item, i) => (
              <div
                key={i}
                className="border rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetCategory;
