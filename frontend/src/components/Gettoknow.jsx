import React from "react";

export default function GetToKnow() {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-12">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12">
                <header className="flex items-start gap-4">
                    <span className="text-3xl sm:text-4xl">✨</span>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                            Get to Know Me
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">By <strong>Sonu Kathat</strong>, Founder of <strong>H&amp;S Jewellery</strong></p>
                    </div>
                </header>

                <article className="mt-6 prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700">
                    <p>
                        Jewelry is not just something you wear — it’s something you feel. A delicate necklace can carry the memory of a special day. A ring can represent a lifetime of love. And sometimes, even the smallest detail — a cut, a curve, a sparkle — becomes a symbol of something unforgettable.
                    </p>

                    <p>
                        I’m <strong>Sonu Kathat</strong>, the heart and hands behind <strong>H&amp;S Jewellery</strong>. What began as a deep admiration for traditional Indian craftsmanship slowly turned into a passion — and then a purpose. I founded H&amp;S Jewellery with a simple idea: to create timeless pieces that are not just beautiful, but deeply meaningful.
                    </p>

                    <h3 className="mt-4 text-lg font-medium text-indigo-600">💎 Our Philosophy</h3>
                    <p>
                        At H&amp;S Jewellery, we believe that true luxury lies in authenticity. Each piece we create is a blend of heritage and innovation — rooted in tradition, but designed for the modern world. We combine intricate detailing with clean, elegant aesthetics, using only high-quality materials to craft jewelry that is built to last — and made to be loved.
                    </p>

                    <p>
                        Our inspiration comes from everywhere: vintage royal designs, nature’s forms, modern minimalism, and most importantly — you. Whether it’s a custom bridal set, a dainty daily-wear piece, or a bold statement item, we put soul into every sketch, every stone, every finish.
                    </p>

                    <h3 className="mt-4 text-lg font-medium text-indigo-600">🛠️ Craftsmanship with Soul</h3>
                    <p>
                        Every piece of jewelry at H&amp;S is hand-crafted with care. We work with skilled artisans who bring generations of expertise to every design. From the first pencil sketch to the final polish, our process is guided by precision, passion, and purpose.
                    </p>

                    <p>
                        Our promise is not mass production — it’s personal connection. That’s why we only release limited collections or make custom pieces, so that every customer feels like they’re wearing something truly exclusive.
                    </p>

                    <h3 className="mt-4 text-lg font-medium text-indigo-600">🌟 Our Mission</h3>
                    <p>
                        Jewelry marks life’s most precious moments — and we want to be part of those memories. Whether you’re celebrating a milestone, making a commitment, or simply treating yourself — we’re here to help you find a piece that feels like it was made just for you.
                    </p>

                    <p>
                        At H&amp;S, we don’t just sell jewelry — we create heirlooms. Pieces that carry emotion. Pieces that spark joy. Pieces that live on.
                    </p>

                    <h3 className="mt-4 text-lg font-medium text-indigo-600">🤍 A Note from Me</h3>
                    <p>
                        Starting H&amp;S Jewellery has been one of the most rewarding journeys of my life. What drives me every day is seeing our designs become a part of someone’s story — a bride’s big day, a daughter’s first gift, or a mother’s legacy.
                    </p>

                    <p>
                        Thank you for visiting, for supporting small creators, and for choosing pieces that are crafted with heart.
                    </p>

                    <p className="mt-4 font-semibold">Welcome to H&amp;S — where every piece tells a story.</p>

                    <p className="mt-2 text-sm text-gray-500">— Sonu Kathat<br />Founder &amp; Designer, H&amp;S Jewellery</p>
                </article>

                <footer className="mt-8 flex justify-end">
                    <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                        Contact Us
                    </button>
                </footer>
            </div>
        </section>
    );
}
