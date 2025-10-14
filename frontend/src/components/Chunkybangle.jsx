import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";

function Chunkybangle() {
  const [bangles, setBangles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBangles = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://hs-jewellery.vercel.app/category/get");
        const bangleCategory = res.data.categories[5];

        const bangleItems = bangleCategory.images.urls.map((url, index) => ({
          image: url,
          name: bangleCategory.images.details[index]?.name || "No Name",
          price: bangleCategory.images.details[index]?.price || "N/A"
        }));

        setBangles(bangleItems);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching bangles:", err);
        setLoading(false);
      }
    };
    fetchBangles();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-96">
          <div className="loader border-t-4 border-b-4 border-green-900 rounded-full w-12 h-12 animate-spin"></div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Details
        heading="Chunky Bangles"
        headingimage="https://media.istockphoto.com/id/1396888542/photo/traditional-indian-gold-bangles.webp?a=1&b=1&s=612x612&w=0&k=20&c=zMCgcyRis5Xn2ZEno7kt7Yj3Eju2ORzz4QuhNs0ucus="
        all={bangles}
      />
      <Footer />
    </>
  );
}

export default Chunkybangle;
