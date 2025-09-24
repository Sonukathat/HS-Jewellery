import axios from "axios";
import { useEffect, useState } from "react";

function Getcategory() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await axios.get("http://localhost:5000/category/get");

                const categories = res.data.categories;

                // console.log(categories)

                const selectedCategory = categories.map((cat) => ({
                    name: cat.name,
                    detail: cat.images.details.map((det,i) => ({
                        price: det.price,
                        name: det.name,
                        imgUrl: cat.images.urls[i]
                    })),
                    
                }));

                setCategory(selectedCategory);
                // console.log(selectedCategory);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchCategory();
    }, []);

    return (
        <>
            {category.map((cat, i) => (
                <div key={i} className="flex flex-col gap-2 border p-4 m-2 rounded">
                    <p className="font-bold">{cat.name}</p>
                    {cat.detail.map((det, j) => (
                        <div key={j} className="pl-4">
                            <p>{det.name}</p>
                            <p>{det.price}</p>
                            <img src={det.imgUrl} alt={det.name} />
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Getcategory;
