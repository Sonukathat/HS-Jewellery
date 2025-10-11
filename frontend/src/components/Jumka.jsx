import { useState, useEffect } from "react";
import Details from "./common/Details";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Jumka() {
  const [jumkas, setJumkas] = useState([]);

  useEffect(() => {
    const fetchJumkas = async () => {
      try {
        const res = await axios.get('https://machki.vercel.app/category/get');
        const jumkaCategory = res.data.categories[4];
        const jumkaItems = jumkaCategory.images.urls.map((url, index) => ({
          image: url,
          name: jumkaCategory.images.details[index]?.name || "No Name",
          price: jumkaCategory.images.details[index]?.price || "N/A"
        }));
        setJumkas(jumkaItems);
      } catch (err) {
        console.error("Error fetching jumkas:", err);
      }
    };
    fetchJumkas();
  }, []);

  return (
    <>
      <Header />
      <Details
        heading="Jumka"
        headingimage="https://images.unsplash.com/photo-1707222611166-f80ded88b677?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGp1bWtoYSUyMGpld2VsZXJ5fGVufDB8MHwwfHx8MA%3D%3D"
        all={jumkas}
      />
      <Footer />
    </>
  );
}

export default Jumka;
