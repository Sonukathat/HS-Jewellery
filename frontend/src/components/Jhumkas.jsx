

function Jhumkas() {

    const ImageUrls = [
        "https://images.unsplash.com/photo-1616586169190-fb7ff2abd757?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGVhciUyMGpodW1rYXMlMjBqZXdlbGVyeSUyMHBpY3MlMjBoZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1625516152414-8f33eef3d660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGVhciUyMGpodW1rYXMlMjBqZXdlbGVyeSUyMHBpY3MlMjBoZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1691030255383-ec9765ad5340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGVhciUyMGpodW1rYXMlMjBqZXdlbGVyeSUyMHBpY3MlMjBoZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1652766540048-de0a878a3266?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybCUyMGVhciUyMGpodW1rYXMlMjBqZXdlbGVyeSUyMHBpY3MlMjBoZHxlbnwwfHwwfHx8MA%3D%3D",
        "https://www.machki.com/cdn/shop/files/IMG_6286_5108f6f4-32e2-4f9e-8e01-7eda6ea73f86.heic?v=1726898436&width=360",
        "https://plus.unsplash.com/premium_photo-1675107359599-a2d0d8983c36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBlYXIlMjBqaHVta2FzJTIwamV3ZWxlcnklMjBwaWNzJTIwaGR8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGdpcmwlMjBlYXIlMjBqaHVta2FzJTIwamV3ZWxlcnklMjBwaWNzJTIwaGR8ZW58MHx8MHx8fDA%3D",
        "https://www.machki.com/cdn/shop/files/IMG_6440.heic?v=1726897372&width=360"
    ];


    return (
        <div className='flex flex-col gap-4'>
            <div>
                <h2 className='text-4xl ml-4 py-10'>Jhumkas</h2>
            </div>
            <div className='grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {ImageUrls.map((src, i) => (
                    <div key={i} className='border border-gray-200 rounded-md hover:border-gray-500 transition-all duration-300 ease-in-out overflow-hidden'>
                        <img src={src} alt="jewe" className='h-96 w-full rounded-t-md transition-transform duration-500 ease-in-out transform hover:scale-101' />
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

export default Jhumkas
