import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import HS from "/images.png";

function Header() {
    const token = localStorage.getItem("token");
    const isLoggedIn = !!token;

    const texts = [
        "Cash On Delivery Upto 2000/-",
        "Flat 10% off on Prepaid orders above 2000/-",
        "Free shipping on orders above 1500/-"
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [texts.length]);

    const [menuOpen, setMenuOpen] = useState(false);
    const [search, setSearch] = useState(false);

    const items = [
        { name: "Shop All", path: "/shop-all" },
        { name: "Earrings", path: "/earrings" },
        { name: "Necklaces", path: "/necklaces" },
        { name: "Bracelets", path: "/bracelets" },
        { name: "Rings", path: "/rings" },
        { name: "Jumka", path: "/jumka" },
        { name: "Chunky Bangles", path: "/chunky-bangles" },
    ];

    return (
        <div className="w-full relative">
            {/* Top Notification Bar */}
            <div className="bg-gradient-to-r from-[#FFE5D3] to-[#FFE2F0] py-2 flex justify-center sm:justify-around">
                <div className="hidden sm:block">
                    <a href="https://www.instagram.com/" target="_blank">
                        <FaInstagram className="text-xl cursor-pointer" />
                    </a>
                </div>
                <div className="flex items-center text-sm">
                    <IoIosArrowBack />
                    <p className="w-72 text-center">{texts[index]}</p>
                    <IoIosArrowForward />
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white flex justify-evenly items-center p-2 lg:p-0 lg:py-2">
                {/* Hamburger Menu for Mobile */}
                <div className="block lg:hidden">
                    <RxHamburgerMenu
                        className="text-2xl cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>

                {/* Logo */}
                <div>
                    <img src={HS} alt="logo" className="w-10 xl:w-12 border rounded-full" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-3 xl:gap-8">
                    {items.map((item, index) => (
                        <Link
                            to={item.path}
                            key={index}
                            className="cursor-pointer font-serif text-sm"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex gap-4 xl:gap-8">
                    <CiSearch
                        className="text-2xl cursor-pointer"
                        onClick={() => setSearch(!search)}
                    />
                    {isLoggedIn ? (
                        <Link to="/profile" title="Go to Profile">
                            <CgProfile className="text-2xl cursor-pointer" />
                        </Link>
                    ) : (
                        <Link to="/signin" title="Login to Continue">
                            <CgProfile className="text-2xl cursor-pointer" />
                        </Link>
                    )}
                    <Link to="/cart">
                        <CiShoppingCart className="text-2xl" />
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden text-sm sm:text-base md:text-lg lg:text-xl bg-white px-4 py-2 space-y-2">
                    {items.map((item, index) => (
                        <Link
                            to={item.path}
                            key={index}
                            className="block font-serif cursor-pointer border-b border-gray-400 py-1"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}

            {/* Responsive Search Bar */}
            {search && (
                <div className="absolute z-50 top-full left-0 w-full flex justify-center mt-2 px-2 sm:px-4">
                    <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
