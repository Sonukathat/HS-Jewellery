import { useEffect, useState } from "react";
import axios from "axios";

function StealDeal() {
    const [stealImg, setStealImg] = useState([]);

    useEffect(() => {
        const fetchStealImg = async () => {
            try {
                const res = await axios.get("http://localhost:5000/category/get");
                const categories = res.data.categories;

                const selected = categories.flatMap(cat => cat.images.slice(0, 2));

                setStealImg(selected.slice(0, 10));
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };
        fetchStealImg();
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h2 className="text-4xl py-10 ml-4">Steal the Deal</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-4">
                {stealImg.map((src, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-md hover:border-gray-500 transition-all duration-300 ease-in-out"
                    >
                        <img
                            src={src}
                            alt="jewellery"
                            className="h-96 w-full rounded-t-md transition-transform duration-500 ease-in-out transform hover:scale-101"
                        />
                        <button className="bg-green-950 text-white px-3 py-1 rounded-md relative left-2 bottom-8 text-sm">
                            Sale
                        </button>
                        <p className="mt-2 ml-5">Heart Multi-Color Y-Necklace</p>
                        <div className="flex">
                            <p className="my-3 ml-5 text-gray-400 line-through">
                                Rs 1,099.00
                            </p>
                            <p className="my-3 ml-5">Rs 999.00</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center py-8">
                <button className="bg-green-950 text-white px-8 py-3 rounded-md">
                    View all
                </button>
            </div>
        </div>
    );
}

export default StealDeal;
