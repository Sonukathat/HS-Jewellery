import axios from "axios";
import { useEffect, useState } from "react"

function Getcategory() {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await axios.get('http://localhost:5000/category/get');

                const category = res.data.categories;

                console.log(category)

                const selectedCategory = category.map(cat => ({
                    name: cat.name,
                    image: cat.images.urls[0],
                    detail: cat.images.details[0]
                }));

                setCategory(selectedCategory);
                console.log(selectedCategory)
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchCategory()
    }, [])

    return (
        <>
            {category.map((cat, i) => (
                <div key={i} className="flex justify-center items-center gap-4">   
                    <p>{cat.name}</p>
                    <p>{cat.detail.name}</p>
                </div>
            ))}
        </>
    )
}

export default Getcategory
