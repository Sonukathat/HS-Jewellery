import { useEffect, useState } from "react";
import axios from "axios";

function Trending() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                let res = await axios.get('https://machki.vercel.app/category/get');
                let first3Categ = res.data.categories.slice(0, 3);

                let allProducts = [];

                first3Categ.forEach((category) => {
                    let imagesData = category.images;

                    // Har category se sirf 4 items lo
                    let combined = imagesData.details.slice(0, 4).map((item, index) => ({
                        ...item,
                        image: imagesData.urls[index],
                    }));

                    // All products me add kar do
                    allProducts = [...allProducts, ...combined];
                });

                setProducts(allProducts);

            } catch (error) {
                console.log("Error Fetching Images", error);
            }
        }
        fetchImages()
    }, [])

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h2 className="text-4xl font-serif   my-4 ml-4">Trending Now</h2>
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
                        <p className="mt-8 ml-5 font-serif">{item.name}</p>
                        <p className="my-3 ml-5">{item.price}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-800 px-8 py-3 text-white rounded-md cursor-pointer">
                    View all
                </button>
            </div>
        </div>
    );
}

export default Trending;
