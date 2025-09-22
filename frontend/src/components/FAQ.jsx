
function FAQ() {

    const parag = [
        "Are your jewelry Water-proof ?",
        "How long does it takes to deliver?",
        "How to know ring size ?",
        "Are your Bracelets standard size?",
        "How to order for COD?",
        "How can I take care of these jewelleries ?"
    ]

    return (
        <div className="flex flex-col gap-8 py-6">
            <div>
                <h2 className="ml-4 text-4xl font-serif">FAQ</h2>
            </div>
            <div className="flex flex-col items-center">
                {parag.map((para,index)=>(
                    <p className="py-4 border-b font-serif cursor-pointer" key={index}>{para}</p>
                ))}
            </div>
            <div className="flex flex-col items-center gap-2 px-2 text-center">
                <h2 className="text-2xl font-serif">Subscribe to our emails</h2>
                <p className="font-serif">Subscribe to our mailing list for insider news, product launches, and more.</p>
                <p className="text-xl relative top-10 left-12 sm:left-32">&rarr;</p>
                <input className="border p-2 rounded-md w-1/2 sm:max-w-80 border-gray-400" type="text" placeholder="Email" />
            </div>
        </div>
    )
}

export default FAQ
