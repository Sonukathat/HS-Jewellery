import { useState, useEffect } from "react";
import Details from "./common/Details";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Shopall() {
  const [all, setAll] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:3000/category/get");

        const allCategories = res.data.categories.flatMap(cat =>
          cat.images.urls.slice(0, 3).map((url, index) => ({
            image: url,
            name: cat.images.details[index]?.name || "No Name",
            price: cat.images.details[index]?.price || "N/A"
          }))
        );

        setAll(allCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex justify-center items-center h-96">
          <div className="loader border-t-4 border-b-4 border-green-900 rounded-full w-12 h-12 animate-spin"></div>
        </div>
        <Footer />
      </>
    );
  }

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
