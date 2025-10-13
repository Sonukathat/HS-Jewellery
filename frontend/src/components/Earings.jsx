import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./common/Details";
import Header from "./Header";
import Footer from "./Footer";

function Earings() {
  const [earrings, setEarrings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEarrings = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:3000/category/get");

        // Earrings category fetch (2nd index)
        const earringCategory = res.data.categories[1];

        // Map URLs + details
        const earringItems = earringCategory.images.urls.map((url, index) => ({
          image: url,
          name: earringCategory.images.details[index]?.name || "No Name",
          price: earringCategory.images.details[index]?.price || "N/A"
        }));

        setEarrings(earringItems);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching earrings:", err);
        setLoading(false);
      }
    };

    fetchEarrings();
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
        heading="Earrings"
        headingimage="https://images.unsplash.com/photo-1608613381851-6a058de0dc11?w=600&auto=format&fit=crop&q=60"
        all={earrings}
      />
      <Footer />
    </>
  );
}

export default Earings;
