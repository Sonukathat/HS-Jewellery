
function Feedback() {

    const feedbacks = [
        {
            name: "Durga",
            review: "Received my order. The quality is top notch with affordable price. Just love it. Keep going"
        },
        {
            name: "Mohita",
            review: "I am delighted with my recent purchases. Your collection reflects a refined elegance that stands out in the marketplace. Thank you for providing such a remarkable shopping experience. I look forward to exploring more of your beautiful pieces in the future."
        },
        {
            name: "Zainab",
            review: "This is my second time ordering from your store and I wanted to let you know how much I love your products!"
        },
        {
            name: "Manjeera",
            review: "Received my parcel and I must say hands down the best customer service you guys have. Loved the jewelry, every piece of yours is unique and they are just stunning. I'm def going to purchase more from you!"
        },
        {
            name: "Deepak",
            review: "Just received couple of Bracelets today, just beautiful Specially the packaging and fragrance"
        },
        {
            name: "Lakshika",
            review: "Oh my god!! I received the parcel today, the packaging itself feels luxurious.The pieces are so cute and so pinterest coded just loved it!!!"
        }
    ];

    return (
        <div className="bg-[#7b614e] mt-8 py-6 flex flex-col gap-10">
            <div>
                <h2 className="text-4xl text-white ml-4 font-serif">Feedback</h2>
            </div>
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-8 px-4 text-white text-center sm:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:px-16 xl:px-32">
                    {feedbacks.map((item, index) => (
                        <div key={index} className="h-72 bg-white/5 flex flex-col justify-baseline rounded-md p-6">
                            <h2 className="text-2xl font-serif">{item.name}</h2>
                            <p className="mt-4 font-serif">{item.review}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-white text-[#7b614e] px-10 py-3 rounded-lg cursor-pointer">Reviews on Instagram</button>
            </div>
        </div>
    )
}

export default Feedback
