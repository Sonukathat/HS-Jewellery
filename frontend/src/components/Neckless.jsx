import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";

function Neckless() {
  const [necklessImages, setNecklessImages] = useState([]);

  useEffect(() => {
    const fetchNeckless = async () => {
      try {
        const res = await axios.get("http://localhost:5000/category/get");
        // console.log(res.data.categories[4].images)
        setNecklessImages(res.data.categories[0].images.urls);
      } catch (err) {
        console.error("Error fetching Neckless:", err);
      }
    };

    fetchNeckless();
  }, []);

  return (
    <>
      <Header/>
      <Details
        heading="Necklaces"
        headingimage="https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVja2xhY2V8ZW58MHwwfDB8fHww"
        images={necklessImages}
      />
      <Footer/>
    </>
  );
}

export default Neckless;
