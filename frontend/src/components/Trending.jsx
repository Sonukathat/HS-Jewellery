import { useEffect, useState } from "react";
import axios from "axios";

function Trending() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await axios.get("http://localhost:5000/category/get");
                const category = res.data.categories;

                const needed = category.filter((cat) =>
                    ["neckless", "rings", "jumka"].includes(cat.name)
                );

                const names = [
                    "Royal Jumka",
                    "Pearl Jumka",
                    "Antique Jumka",
                    "Designer Jumka",
                    "Diamond Necklace",
                    "Gold Necklace",
                    "Emerald Necklace",
                    "Modern Necklace",
                    "Classic Ring",
                    "Silver Ring",
                    "Platinum Ring",
                    "Ruby Ring",
                ];

                const selected = needed
                    .flatMap((cat) => cat.images.slice(0, 4))
                    .map((img, index) => ({
                        image: img,
                        name: names[index] || "Jewellery",
                    }));

                setProducts(selected);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-4xl my-4 ml-4">Trending Now</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.slice(0, 12).map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-md hover:border-gray-500 transition-all duration-300 ease-in-out overflow-hidden"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-96 w-full transition-transform duration-500 ease-in-out transform hover:scale-101"
                        />
                        <p className="mt-8 ml-5">{item.name}</p>
                        <p className="my-3 ml-5">Rs 1,099.00</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-800 px-8 py-3 text-white rounded-md">
                    View all
                </button>
            </div>
        </div>
    );
}

export default Trending;
