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

      <div className="mt-4 grid grid-cols-1 gap-8 px-4 lg:px-28 xl:px-30 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="font-serif">{item.name}</p>
                <p className="text-gray-600 text-sm">₹{item.price}</p>
              </div>
              <button className="bg-gradient-to-r from-[#f4d7c2] to-[#FFE2F0] text-black font-serif text-xs px-2 py-1 rounded cursor-pointer hover:from-[#ffd1a8] hover:to-[#ffc7de] transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
