import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";

function Chunkybangle() {
  const [bangles, setBangles] = useState([]);

  useEffect(() => {
    const fetchBangles = async () => {
      try {
        const res = await axios.get("http://localhost:3000/category/get");
        const bangleCategory = res.data.categories[3];
        const bangleItems = bangleCategory.images.urls.map((url, index) => ({
          image: url,
          name: bangleCategory.images.details[index]?.name || "No Name",
          price: bangleCategory.images.details[index]?.price || "N/A"
        }));
        setBangles(bangleItems);
      } catch (err) {
        console.error("Error fetching bangles:", err);
      }
    };
    fetchBangles();
  }, []);

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
