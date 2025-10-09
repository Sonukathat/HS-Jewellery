import { FaInstagram } from "react-icons/fa";

function Footer() {

  const links = [
    "Shipping Policy",
    "Return and Refund",
    "Terms of Service",
    "Privacy Policy",
    "About Us",
    "Jewellery Care"
  ];

  const info = [
    "© 2025, Powered by React",
    "Refund policy",
    "Privacy policy",
    "Terms of service",
    "Shipping policy",
    "Contact information"
  ];


  return (
    <div className="bg-[#FFD5D5]">
      <div className="flex flex-col gap-8 py-6 border-b border-gray-400">
        <div>
          <h2 className="text-2xl text-center font-serif">Quick links</h2>
        </div>
        <div className="flex flex-col gap-4 pl-4 text-sm text-gray-700 md:flex-row md:justify-center md:gap-8">
          {links.map((link, index) => (
            <p className="cursor-pointer font-serif" key={index}>{link}</p>
          ))}
        </div>
        <div className="flex justify-center">
          <a href="https://www.instagram.com/" target="_blank"><FaInstagram className="text-xl cursor-pointer" /></a>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 pt-16 pb-4 text-xs pl-8">
       {info.map((info,index)=>(
        <p className="cursor-pointer" key={index}>{info}</p>
       ))}
      </div>
    </div>
  )
}

export default Footer
