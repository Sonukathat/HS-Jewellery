import { useEffect, useState } from "react";
import axios from "axios";

function Trending() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                let res = await axios.get('https://hs-jewellery.vercel.app/category/get');
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
        }
        fetchImages();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <div className="loader border-t-4 border-b-4 border-gray-900 rounded-full w-12 h-12 animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-4xl font-serif my-4 ml-4">Trending Now</h2>
            </div>
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
                                <p className="mt-1">{item.price}</p>
                            </div>
                            <button className="bg-[#A58A6C] text-white text-xs px-1 py-1 rounded">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="bg-[#A58A6C] px-8 py-3 text-white rounded-md cursor-pointer hover:bg-[#8c6f53] transition-colors duration-300">
                    View all
                </button>
            </div>
        </div>
    );
}

export default Trending;
