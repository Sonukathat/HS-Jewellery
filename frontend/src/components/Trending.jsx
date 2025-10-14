import { useEffect, useState } from "react";
import axios from "axios";

function StealDeal() {
  const [stealImg, setStealImg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStealImg = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://hs-jewellery.vercel.app/category/get");
        const categories = res.data.categories;

        const selected = categories.flatMap(cat => {
          return cat.images.details.slice(0, 2).map((item, index) => ({
            ...item,
            image: cat.images.urls[index],
          }));
        });

        setStealImg(selected.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };
    fetchStealImg();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="loader border-t-4 border-b-4 border-green-900 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-4xl py-10 ml-4 font-serif">Steal the Deal</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-4">
        {stealImg.map((item, i) => (
          <div
            key={i}
            className="cursor-pointer border border-gray-200 rounded-md hover:border-gray-500 transition-all duration-300 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-96 w-full rounded-t-md transition-transform duration-500 ease-in-out transform hover:scale-101"
            />
            <button className="bg-green-950 text-white px-3 py-1 rounded-md relative left-2 bottom-8 text-sm">
              Sale
            </button>
            <p className="mt-2 ml-5 font-serif">{item.name}</p>
            <div className="flex justify-between items-center">
              <div className="flex">
                <p className="my-3 ml-5">Rs {item.price}</p>
              </div>
              {/* Buy Now button like Trending */}
              <button className="bg-gradient-to-r from-[#f4d7c2] to-[#FFE2F0] text-black font-serif text-xs px-2 py-1 rounded cursor-pointer hover:from-[#ffd1a8] hover:to-[#ffc7de] transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-8">
        <button className="bg-[#A58A6C] text-white px-8 py-3 rounded-md cursor-pointer">
          View all
        </button>
      </div>
    </div>
  );
}

export default StealDeal;
