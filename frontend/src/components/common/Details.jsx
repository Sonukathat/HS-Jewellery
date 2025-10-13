// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Details({ heading, headingimage, all }) {
  return (
    <div className="py-12">
      <div className="flex flex-col px-1 sm:flex-row sm:items-center justify-around">
        <h2 className="text-4xl my-4 ml-4 font-serif">{heading}</h2>
        <img
          className="h-40 w-screen sm:w-100 rounded-r cursor-pointer"
          src={headingimage}
          alt=""
        />
      </div>

      <div className="flex flex-row-reverse">
        <p className="text-sm mr-6 mt-4 lg:mr-36 xl:mr-48">
          A-Z ({all.length} products)
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-8 px-4 lg:px-28 xl:px-48 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {all.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer border border-gray-200 rounded-md hover:border-gray-500 transition-all duration-300 ease-in-out overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-80 w-full transition-transform duration-500 ease-in-out transform hover:scale-101"
            />
            <p className="mt-4 ml-5 font-serif">{item.name}</p>
            <p className="my-2 ml-5 text-gray-600">₹{item.price}</p>
          </div>
        ))}
      </div>

      {/* <div className="mt-4 flex justify-center gap-8 text-2xl">
        <IoIosArrowBack className="cursor-pointer" />
        <IoIosArrowForward className="cursor-pointer" />
      </div> */}
    </div>
  );
}

export default Details;
