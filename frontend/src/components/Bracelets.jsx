import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";

function Bracelets() {
  const [braceletImages, setBraceletImages] = useState([]);

  useEffect(() => {
    const fetchBracelets = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category/get");
        
        setBraceletImages(res.data.categories[2].images.urls);
      } catch (err) {
        console.error("Error fetching bracelets:", err);
      }
    };

    fetchBracelets();
  }, []);

  return (
    <Details
      heading="Bracelets"
      headingimage="https://images.unsplash.com/photo-1723522938779-d434eb9294d4?w=600&auto=format&fit=crop&q=60"
      images={braceletImages}
    />
  );
}

export default Bracelets;
