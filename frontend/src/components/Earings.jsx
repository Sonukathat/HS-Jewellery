import { useEffect, useState } from "react";
import axios from "axios";
import Alljewelery from "./common/Alljewelery";

function Earings() {
  const [earringImages, setEarringImages] = useState([]);

  useEffect(() => {
    const fetchEarrings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category/get");
        // console.log(res.data.categories[2].images)
        setEarringImages(res.data.categories[2].images); 
      } catch (err) {
        console.error("Error fetching earrings:", err);
      }
    };

    fetchEarrings();
  }, []);

  return (
    <Alljewelery
      heading="Earrings"
      headingimage="https://images.unsplash.com/photo-1608613381851-6a058de0dc11?w=600&auto=format&fit=crop&q=60"
      images={earringImages}
    />
  );
}

export default Earings;
