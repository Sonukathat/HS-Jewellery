import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";

function Neckless() {
  const [necklaces, setNecklaces] = useState([]);

  useEffect(() => {
    const fetchNecklaces = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category/get");

        
        const necklaceCategory = res.data.categories[0];

        
        const necklaceItems = necklaceCategory.images.urls.map((url, index) => ({
          image: url,
          name: necklaceCategory.images.details[index]?.name || "No Name",
          price: necklaceCategory.images.details[index]?.price || "N/A"
        }));

        setNecklaces(necklaceItems);
      } catch (err) {
        console.error("Error fetching Necklaces:", err);
      }
    };

    fetchNecklaces();
  }, []);

  return (
    <>
      <Header />
      <Details
        heading="Necklaces"
        headingimage="https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVja2xhY2V8ZW58MHwwfDB8fHww"
        all={necklaces}
      />
      <Footer />
    </>
  );
}

export default Neckless;
