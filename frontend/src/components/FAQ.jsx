import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

function FAQ() {

    const faqData = [
        {
            question: "Are your jewelry Water-proof?",
            answer: "Yes, our jewelry is water-resistant and can handle everyday splashes. You can wear it while washing your hands or in light rain. However, avoid wearing it while swimming or showering. Prolonged exposure to water may reduce its shine. Proper care will keep it looking new for years.",
        },
        {
            question: "How long does it takes to deliver?",
            answer: "Delivery usually takes 3-5 business days depending on your location. Once your order is shipped, you will receive a tracking link. Sometimes, remote areas may take a little longer. We always try to ensure timely delivery. You can contact support if there are any delays.",
        },
        {
            question: "Are your Bracelets standard size?",
            answer: "Yes, our bracelets are adjustable and fit most wrist sizes. They are designed for comfort and daily wear. You can tighten or loosen them as needed. The adjustable feature makes them perfect for gifting. Enjoy a stylish fit every time you wear it.",
        },
        {
            question: "How to know ring size?",
            answer: "You can check our ring size guide available on the product page. Measure your finger carefully using the instructions. If you are unsure, our support team is happy to help. Remember, finger size may change slightly with temperature. Choosing the right size ensures a perfect fit.",
        },
        {
            question: "How can I take care of these jewelleries?",
            answer: "Avoid harsh chemicals, perfumes, and moisture to maintain shine. Store them in a dry, soft pouch when not in use. Clean them gently with a soft cloth. Wearing them carefully will prevent scratches and damage. Following these tips keeps your jewelry looking brand new.",
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
