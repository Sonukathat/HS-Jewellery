import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";

function Rings() {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        const res = await axios.get("http://localhost:3000/category/get");
        const ringCategory = res.data.categories[3];
        const ringItems = ringCategory.images.urls.map((url, index) => ({
          image: url,
          name: ringCategory.images.details[index]?.name || "No Name",
          price: ringCategory.images.details[index]?.price || "N/A"
        }));
        setRings(ringItems);
      } catch (err) {
        console.error("Error fetching rings:", err);
      }
    };
    fetchRings();
  }, []);

  return (
    <>
      <Header />
      <Details
        heading="Rings"
        headingimage="https://images.unsplash.com/photo-1654700005435-8af6c06f3716?w=600&auto=format&fit=crop&q=60"
        all={rings}
      />
      <Footer />
    </>
  );
}

export default Rings;
