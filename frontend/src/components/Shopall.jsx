import { useState, useEffect } from "react";
import Details from "./common/Details";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Shopall() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("https://hs-jewellery.vercel.app/category/get");

        // Combine image URLs with corresponding name & price
        const allCategories = res.data.categories.flatMap(cat =>
          cat.images.urls.slice(0, 3).map((url, index) => ({
            image: url,
            name: cat.images.details[index]?.name || "No Name",
            price: cat.images.details[index]?.price || "N/A"
          }))
        );

        setAll(allCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchAll();
  }, []);

  return (
    <>
      <Header />
      <Details
        heading="Shop-All"
        headingimage="https://images.unsplash.com/photo-1707222611166-f80ded88b677?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGp1bWtoYSUyMGpld2VsZXJ5fGVufDB8MHwwfHx8MA%3D%3D"
        all={all}
      />
      <Footer />
    </>
  );
}

export default Shopall;
