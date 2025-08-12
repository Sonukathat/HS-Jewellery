import jewe from '../assets/photo-1645090531845-ed3d634c5d87.avif';

const jewelry = [
  ''
];

const categories = [
  'Necklaces',
  'Earrings',
  'Rings',
  'Bracelets',
  'Ocean inspired',
  'Chunky Bangles',
];

function Category() {
  return (
    <div>
      <div>
        <h2 className='text-4xl ml-4 py-10'>Categories</h2>
      </div>
      <div className='grid grid-cols-1 px-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:px-44'>
        {categories.map((category, index) => (
          <div key={index} className='border border-gray-200 rounded-b-sm pb-16 hover:scale-[1.01] hover:border-gray-500 transition-all duration-300 ease-in-out'>
            <img
              src={jewe}
              alt={category}
              className='w-full h-auto'
            />
            <p className='mt-6 ml-4'>{category} &rarr;</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center py-8'>
        <button className='bg-gray-800 px-8 py-3 text-white rounded-md'>
          View all
        </button>
      </div>
    </div>
  );
}

export default Category;
