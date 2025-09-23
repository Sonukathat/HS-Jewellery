
function Addcategory() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r bg-[#f8dcdb] via-white to-[#f8dcdb]">
            <form className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6">
                <h2 className="text-3xl font-bold text-center text-[#c39e9c] font-serif">
                    Add Category
                </h2>
                <div className="flex flex-col">
                    <label htmlFor="cateName" className="mb-2 font-semibold text-gray-700">
                        Category Name
                    </label>
                    <input
                        type="text"
                        id="cateName"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter category name"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="desc" className="mb-2 font-semibold text-gray-700">
                        Description
                    </label>
                    <input
                        type="text"
                        id="desc"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Enter description"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="imgUrl" className="mb-2 font-semibold text-gray-700">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="imgUrl"
                        className="px-3 py-2 border border-gray-300 rounded-lg cursor-pointer file:bg-[#f8dcdb] file:text-black file:rounded-md file:px-4 file:py-2"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="nameprice" className="mb-2 font-semibold text-gray-700">
                        Name & Price
                    </label>
                    <input
                        type="text"
                        id="nameprice"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Eg. Ring - ₹1200"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full   bg-[#f8dcdb] text-black font-semibold py-3 rounded-lg shadow-md cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Addcategory
