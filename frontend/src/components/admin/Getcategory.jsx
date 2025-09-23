import axios from "axios";
import { useEffect, useState } from "react";

function Getcategory() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await axios.get("http://localhost:5000/category/get");
                const data = res.data.categories;

                // Normalize data
                const formatted = data.map((cat) => ({
                    name: cat.name,
                    items: cat.images?.details?.flat() || [] // 2D array ko flatten kar diya
                }));

                setCategories(formatted);
                console.log(formatted)
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategory();
    }, []);

    return (
        <div className="p-6">
            {categories.map((cat, i) => (
                <div key={i} className="mb-12">
                    {/* Category Name */}
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">{cat.name}</h2>

                    {/* Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cat.items.map((item, j) => (
                            <div
                                key={j}
                                className="border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                            >
                                <img
                                    src={`http://localhost:5000/${item.image}`}
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                <div className="p-4 text-center">
                                    <p className="font-semibold text-lg text-gray-900">{item.name}</p>
                                    <p className="text-gray-600 mt-1">₹{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Getcategory;
