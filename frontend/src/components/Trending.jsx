

function Trending() {


    const imageUrls = [
        "https://plus.unsplash.com/premium_photo-1691030255383-ec9765ad5340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZWxlcnklMjBwaWNzJTIwd2l0aCUyMGdpcmwlMjBuZWNrJTIwaGR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1721807550942-a218261a4896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDM4fHxqZXdlbGVyeSUyMChoZWF2eSUyMG5lY2tsZXNzKSUyMGZvciUyMHBjfGVufDB8fDJ8fHww",
        "https://images.unsplash.com/photo-1636517524632-fd2408bf014c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1633810545227-3c2f43741eea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1633810542706-90e5ff7557be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1599459182681-c938b7f65af0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1666060517945-26044b5057cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1633555234047-192d10238f5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1625516152414-8f33eef3d660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1675107359599-a2d0d8983c36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1616586169190-fb7ff2abd757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww"
    ];

    return (
        <div className='flex flex-col gap-8'>
            <div>
                <h2 className='text-4xl my-4 ml-4'>Trending Now</h2>
            </div>
            <div className='grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {imageUrls.map((src, i) => (
                    <div key={i} className='border border-gray-200 rounded-md hover:border-gray-500 transition-all duration-300 ease-in-out overflow-hidden'>
                        <img src={src} alt="jewelery" className="h-96 w-full transition-transform duration-500 ease-in-out transform hover:scale-101" />
                        <p className='mt-8 ml-5'>Heart Multi-Color Y-Necklace</p>
                        <p className='my-3 ml-5'>Rs 1,099.00</p>
                    </div>
                ))
                }
            </div>
            <div className='flex justify-center'>
                <button className='bg-gray-800 px-8 py-3 text-white rounded-md'>View all</button>
            </div>
        </div>
    )
}

export default Trending
