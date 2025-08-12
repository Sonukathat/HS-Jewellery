
function StealDeal() {

    const imageUrls = [
        "https://www.machki.com/cdn/shop/files/IMG_4998.heic?v=1751877929&width=360",
        "https://www.machki.com/cdn/shop/files/IMG_1190.heic?v=1748890298&width=360",
        "https://www.machki.com/cdn/shop/files/IMG_3763_3db1bc19-e55a-40d4-a0de-5a9ee85e56ff.heic?v=1752255935&width=360",
        "https://images.unsplash.com/photo-1599489306395-5a2e35951295?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1560131823-aeb0716af8d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1643387774154-4ec59518f9a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGpld2VsZXJ5JTIwcGljcyUyMHdpdGglMjBnaXJsJTIwbmVjayUyMGhkfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1621939745912-aad97fd3a34d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxqZXdlbGVyeSUyMHBpY3MlMjB3aXRoJTIwZ2lybCUyMG5lY2slMjBoZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1623279743107-152e86999257?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxqZXdlbGVyeSUyMHBpY3MlMjB3aXRoJTIwZ2lybCUyMG5lY2slMjBoZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1631982645875-8bd1db34b1a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxqZXdlbGVyeSUyMHBpY3MlMjB3aXRoJTIwZ2lybCUyMG5lY2slMjBoZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1598371839677-e018c4681e76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxqZXdlbGVyeSUyMHBpY3MlMjB3aXRoJTIwZ2lybCUyMG5lY2slMjBoZHxlbnwwfHwwfHx8MA%3D%3D"
    ];


    return (
        <div className='flex flex-col gap-4'>
            <div>
                <h2 className='text-4xl py-10 ml-4'>Steal the Deal</h2>
            </div>
            <div className='grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-4'>
                {imageUrls.map((src, i) => (
                    <div key={i} className='border border-gray-200 rounded-md hover:scale-[1.01] hover:border-gray-500 transition-all duration-300 ease-in-out'>
                        <img src={src} alt="jewe" className='h-96 w-full rounded-t-md' />
                        <button className='bg-green-950 text-white px-3 py-1 rounded-md relative left-2 bottom-8 text-sm'>Sale</button>
                        <p className='mt-2 ml-5'>Heart Multi-Color Y-Necklace</p>
                        <div className='flex'>
                            <p className='my-3 ml-5 text-gray-400 line-through'>Rs 1,099.00</p>
                            <p className='my-3 ml-5'>Rs 1,099.00</p>
                        </div>
                    </div>
                ))

                }
            </div>
            <div className='flex justify-center py-8'>
                <button className='bg-green-950 text-white px-8 py-3 rounded-md'>View all</button>
            </div>
        </div>
    )
}

export default StealDeal
