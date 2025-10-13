import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";

function Earings() {
  const [earrings, setEarrings] = useState([]);

  useEffect(() => {
    const fetchEarrings = async () => {
      try {
        const res = await axios.get("https://hs-jewellery.vercel.app/category/get");

        
        const earringCategory = res.data.categories[1];

        
        const earringItems = earringCategory.images.urls.map((url, index) => ({
          image: url,
          name: earringCategory.images.details[index]?.name || "No Name",
          price: earringCategory.images.details[index]?.price || "N/A"
        }));

        setEarrings(earringItems);
      } catch (err) {
        console.error("Error fetching earrings:", err);
      }
    };

    fetchEarrings();
  }, []);

  return (
    <>
      <Header />
      <Details
        heading="Earrings"
        headingimage="https://images.unsplash.com/photo-1608613381851-6a058de0dc11?w=600&auto=format&fit=crop&q=60"
        all={earrings}
      />
      <Footer />
    </>
  );
}

export default Earings;
