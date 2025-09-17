import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Alljewelery({ heading, headingimage, images = [] }) {
  const info = [
    "Necklace","Bracelet","Earrings","Ring","Anklet","Pendant",
    "Bangle","Brooch","Tiara","Choker","Cufflinks","Hairpin",
    "Nose Ring","Armlet","Toe Ring","Crown"
  ];

  return (
    <div className="py-4">
      <div className="flex flex-col px-1 sm:flex-row sm:items-center justify-around">
        <h2 className="text-4xl my-4 ml-4">{heading}</h2>
        <img className="h-40 w-screen sm:w-100 rounded-r" src={headingimage} alt="" />
      </div>

      <div className="flex flex-row-reverse">
        <p className="text-sm mr-6 mt-4 lg:mr-36 xl:mr-48">
          Sort by: Alphabetically, A-Z ({images.length} products)
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-8 px-4 lg:px-28 xl:px-48 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {info.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md hover:border-gray-500 transition-all duration-300 ease-in-out overflow-hidden"
          >
            <img
              src={images[index % images.length]} 
              alt={item}
              className="h-80 w-full transition-transform duration-500 ease-in-out transform hover:scale-101"
            />
            <p className="mt-8 ml-5">{item}</p>
            <p className="my-3 ml-5">Rs 1,099.00</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-8 text-2xl">
        <IoIosArrowBack className="cursor-pointer" />
        <IoIosArrowForward className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Alljewelery;
