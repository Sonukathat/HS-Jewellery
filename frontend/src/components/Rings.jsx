import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";

function Rings() {
  const [ringImages, setRingImages] = useState([]);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category/get");
        setRingImages(res.data.categories[5].images.urls);
      } catch (err) {
        console.error("Error fetching rings:", err);
      }
    };
    fetchRings();
  }, []);

  return (
    <>
      <Header/>
      <Details
        heading="Rings"
        headingimage="https://images.unsplash.com/photo-1654700005435-8af6c06f3716?w=600&auto=format&fit=crop&q=60"
        images={ringImages}
      />
      <Footer/>
    </>
  );
}

export default Rings;
