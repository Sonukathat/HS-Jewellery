import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

function FAQ() {

    const faqData = [
        {
            question: "Are your jewelry Water-proof ?",
            answer: "Yes, our jewelry is water-resistant and safe for daily use.",
        },
        {
            question: "How long does it takes to deliver?",
            answer: "Delivery typically takes 3-5 business days depending on your location.",
        },
        {
            question: "How to know ring size ?",
            answer: "You can refer to our ring size guide available on the product page.",
        },
        {
            question: "Are your Bracelets standard size?",
            answer: "Yes, they are adjustable to fit most wrist sizes.",
        },
        {
            question: "How to order for COD?",
            answer: "Simply choose the Cash on Delivery option during checkout.",
        },
        {
            question: "How can I take care of these jewelleries ?",
            answer: "Avoid harsh chemicals and store them in a dry place when not in use.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="flex flex-col gap-8 py-6">
            <div>
                <h2 className="ml-4 text-4xl font-serif">FAQ</h2>
            </div>

            <div className="flex flex-col items-center">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="w-11/12 sm:w-1/2 border-b font-serif cursor-pointer"
                    >
                        <div
                            className="flex items-center justify-between py-4"
                            onClick={() => toggleFAQ(index)}
                        >
                            <p>{item.question}</p>
                            {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </div>
                        {openIndex === index && (
                            <p className="pb-4 text-gray-600">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-2 px-2 text-center">
                <h2 className="text-2xl font-serif">Subscribe to our emails</h2>
                <p className="font-serif">
                    Subscribe to our mailing list for insider news, product launches, and more.
                </p>
                <p className="text-xl relative top-10 left-12 sm:left-32">&rarr;</p>
                <input
                    className="border p-2 rounded-md w-1/2 sm:max-w-80 border-gray-400"
                    type="text"
                    placeholder="Email"
                />
            </div>
        </div>
    );
}

export default FAQ;
