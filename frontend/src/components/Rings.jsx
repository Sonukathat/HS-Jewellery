import { useEffect, useState } from "react";
import axios from "axios";
import Alljewelery from "./common/Alljewelery";

function Rings() {
  const [ringImages, setRingImages] = useState([]);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category/get");
        setRingImages(res.data.categories[5].images);
      } catch (err) {
        console.error("Error fetching rings:", err);
      }
    };
    fetchRings();
  }, []);

  return (
    <Alljewelery
      heading="Rings"
      headingimage="https://images.unsplash.com/photo-1654700005435-8af6c06f3716?w=600&auto=format&fit=crop&q=60"
      images={ringImages}
    />
  );
}

export default Rings;
