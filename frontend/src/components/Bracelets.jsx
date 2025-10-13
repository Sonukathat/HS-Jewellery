import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";

function Bracelets() {
  const [bracelets, setBracelets] = useState([]);

  useEffect(() => {
    const fetchBracelets = async () => {
      try {
        const res = await axios.get("https://hs-jewellery.vercel.app/category/get");

        const braceletCategory = res.data.categories[2];

        const braceletItems = braceletCategory.images.urls.map((url, index) => ({
          image: url,
          name: braceletCategory.images.details[index]?.name || "No Name",
          price: braceletCategory.images.details[index]?.price || "N/A"
        }));

        setBracelets(braceletItems);
      } catch (err) {
        console.error("Error fetching bracelets:", err);
      }
    };

    fetchBracelets();
  }, []);

  return (
    <>
      <Header />
      <Details
        heading="Bracelets"
        headingimage="https://images.unsplash.com/photo-1723522938779-d434eb9294d4?w=600&auto=format&fit=crop&q=60"
        all={bracelets}
      />
      <Footer />
    </>
  );
}

export default Bracelets;
