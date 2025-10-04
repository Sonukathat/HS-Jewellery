import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Category() {
  const [catImg, setcatImg] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get('http://localhost:3000/category/get');
        const categories = res.data.categories;


          const selectedImages = categories.map(cat => ({
            name: cat.name,
            image: cat.images.urls[0] 
          }));

        setcatImg(selectedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchCategory();
  }, []);

  return (
    <div>
      <div>
        <h2 className='text-4xl ml-4 py-10 font-serif'>Categories</h2>
      </div>
      <div className='grid grid-cols-1 px-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:px-44'>
        {catImg.map((cat, index) => (
          <div 
            key={index}
            className='cursor-pointer border border-gray-200 rounded-b-sm xl:pb-10 hover:scale-[1.01] hover:border-gray-500 transition-all duration-300 ease-in-out'
          >
            <img
              src={cat.image}
              alt={cat.name}
              className='w-full h-[80%]'
            />
            <p className='mt-6 ml-4 font-serif'>{cat.name} &rarr;</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center py-8'>
        <button className='bg-gray-800 px-8 py-3 text-white rounded-md cursor-pointer'>
          View all
        </button>
      </div>
    </div>
  );
}

export default Category;
