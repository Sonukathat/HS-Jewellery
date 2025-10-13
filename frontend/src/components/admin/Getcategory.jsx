import axios from "axios";
import { useEffect, useState } from "react";

function Getcategory() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await axios.get("http://localhost:3000/category/get");

                const categories = res.data.categories;

                // console.log(categories)

                const selectedCategory = categories.map((cat) => ({
                    name: cat.name,
                    detail: cat.images.details.map((det, i) => ({
                        price: det.price,
                        name: det.name,
                        imgUrl: cat.images.urls[i]
                    })),

                }));

                setCategory(selectedCategory);
                // console.log(selectedCategory);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchCategory();
    }, []);

    return (
        <>
            <div className="max-w-6xl mx-auto p-4 space-y-6">
                {category.map((cat, i) => (
                    <div key={i} className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
                        <p className="text-xl font-bold text-gray-900 mb-4">{cat.name}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cat.detail.map((det, j) => (
                                <div key={j} className="flex items-center gap-4 border rounded-lg p-4">
                                    <img src={det.imgUrl} alt={det.name} className="w-20 h-20 rounded-lg object-cover border" />
                                    <div>
                                        <p className="text-base font-semibold text-gray-800 truncate">{det.name}</p>
                                        <p className="text-teal-600 font-bold text-sm mt-1">₹{det.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default Getcategory;
