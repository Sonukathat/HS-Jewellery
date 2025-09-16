import { useEffect, useState } from "react";
import axios from "axios";
import Alljewelery from "./common/Alljewelery";

function Chunkybangle() {
  const [bangleImages, setBangleImages] = useState([]);

  useEffect(() => {
    const fetchBangles = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category/get");
        setBangleImages(res.data.categories[3].images.urls);
      } catch (err) {
        console.error("Error fetching bangles:", err);
      }
    };
    fetchBangles();
  }, []);

  return (
    <Alljewelery
      heading="Chunky Bangles"
      headingimage="https://media.istockphoto.com/id/1396888542/photo/traditional-indian-gold-bangles.webp?a=1&b=1&s=612x612&w=0&k=20&c=zMCgcyRis5Xn2ZEno7kt7Yj3Eju2ORzz4QuhNs0ucus="
      images={bangleImages}
    />
  );
}

export default Chunkybangle;
