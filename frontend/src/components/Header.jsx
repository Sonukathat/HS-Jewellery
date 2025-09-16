import { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import machki from "../assets/8D6D93BB-F102-40BF-9634-90888310B860.webp";

function Header() {
    const texts = ["Cash On Delivery Upto 2000/-", "Flat 10% off on Prepaid orders above 2000/-", "Free shipping on orders above 1500/-"];
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 6000);

        return () => clearInterval(interval);
    })

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
        <div className="w-full">
            <div className="bg-[#f8dcdb] py-2 flex justify-center sm:justify-around">
                <div className="hidden sm:block">
                    <a href="https://www.instagram.com/" target="_blank"><FaInstagram className="text-xl cursor-pointer" /></a>
                </div>
                <div className="flex items-center text-sm">
                    <IoIosArrowBack />
                    <p className="w-72 text-center">{texts[index]}</p>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className="bg-white flex justify-evenly items-center p-2 lg:p-0 lg:py-2">
                <div className="block lg:hidden">
                    <RxHamburgerMenu className="text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div>
                    <img src={machki} alt="machki" className="w-36 xl:w-44" />
                </div>
                <div className="hidden lg:flex gap-3 xl:gap-8">
                    {items.map((item, index) => (
                        <Link
                            to={item.path}
                            key={index}
                            className="cursor-pointer text-sm"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="flex gap-4 xl:gap-8">
                    <CiSearch className="text-2xl cursor-pointer" onClick={() => setSearch(!search)} />
                    <Link to="/signin"><CgProfile className="text-2xl" /></Link>
                    <Link to="/cart"><CiShoppingCart className="text-2xl" /></Link>
                </div>
            </div>
            {menuOpen && (
                <div className="lg:hidden text-sm sm:text-base md:text-lg lg:text-xl bg-white px-4 py-2 space-y-2">
                    {paragraphs.map((text, index) => (
                        <p className="cursor-pointer border-b border-gray-400" key={index}>
                            {text}
                        </p>
                    ))}
                </div>
            )}
            {search && (
                <div className="absolute top-9 left-1/4 lg:top-12 xl:top-14 flex justify-center rounded-sm sm:w-1/2 lg:p-4 bg-white">
                    <input type="text" placeholder="search" className="border border-gray-400 rounded p- w-40 sm:w-64 md:p-1 lg:w-96" />
                </div>
            )

            }
        </div>
    );
}

export default Header;
