"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../../../public/logo-svg-binali.svg";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./megamenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // ✅ Fixed nav item class with proper after pseudo-element
  const navItemClass = (path) =>
    `relative py-2 transition-all duration-300 group
    hover:text-primary 
    ${pathname === path ? "text-primary" : "text-dark-2"}`;

  const navItemBorderClass = (path) =>
    `absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300
    ${
      pathname === path ? "bg-primary" : "bg-transparent group-hover:bg-primary"
    }`;

  return (
    <div className="sticky top-0 z-50 w-full bg-white font-inter font-normal text-[16px] shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-gray-100 px-6 lg:px-16 xl:px-14 hidden sm:flex justify-center lg:justify-between items-center h-12">
        <div className="flex items-center text-dark-2 space-x-4">
          <span>
            <FiPhone />
          </span>
          <span
            onClick={() => copyToClipboard("(239) 555-0108")}
            className="cursor-pointer hover:underline underline-offset-4"
          >
            (239) 555-0108
          </span>

          <span>
            <MdOutlineEmail />
          </span>
          <span
            onClick={() => copyToClipboard("info@binali.xyz")}
            className="cursor-pointer hover:underline underline-offset-4"
          >
            info@binali.xyz
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="w-[1.5px] h-12 bg-gray-2/80"></div>
          <a href="#facebook" className="hover:scale-125">
            <RiFacebookFill size={20} />
          </a>
          <div className="w-[1.5px] h-12 bg-gray-2/80"></div>
          <a href="#twitter" className="hover:scale-125">
            <FaXTwitter size={20} />
          </a>
          <div className="w-[1.5px] h-12 bg-gray-2/80"></div>
          <a href="#instagram" className="hover:scale-125">
            <LuInstagram size={20} />
          </a>
          <div className="w-[1.5px] h-12 bg-gray-2/80"></div>
          <a href="#linkedin" className="hover:scale-125">
            <RxLinkedinLogo size={20} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-6 lg:px-16 xl:px-14 h-20 bg-white">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={Logo}
              alt="binali-logo"
              width={120}
              height={40}
              className="w-32 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center space-x-8 list-none">
            <li className="relative">
              <Link href="/" className={navItemClass("/")}>
                Home
                <span className={navItemBorderClass("/")}></span>
              </Link>
            </li>
            <li className="relative">
              <Link href="/about" className={navItemClass("/about")}>
                About Us
                <span className={navItemBorderClass("/about")}></span>
              </Link>
            </li>
            <li className="relative flex items-center group">
              <div className="relative">
                <MegaMenu />
                {/* Border for MegaMenu - shows on hover and when any service page is active */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
                    pathname.startsWith("/services")
                      ? "bg-primary"
                      : "bg-transparent group-hover:bg-primary"
                  }`}
                ></span>
              </div>
            </li>
            <li className="relative">
              <Link href="/products" className={navItemClass("/products")}>
                Our Products
                <span className={navItemBorderClass("/products")}></span>
              </Link>
            </li>
            <li className="relative">
              <Link href="/career" className={navItemClass("/career")}>
                Career
                <span className={navItemBorderClass("/career")}></span>
              </Link>
            </li>
            <li className="relative">
              <Link href="/contact" className={navItemClass("/contact")}>
                Contact
                <span className={navItemBorderClass("/contact")}></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden relative">
          <button onClick={toggleMenu} className="text-primary">
            {!isMenuOpen && <AlignRight size={30} />}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 bg-white z-50 px-6 sm:pt-20"
              >
                <div className="flex justify-between items-center my-5">
                  <Link href="/" onClick={closeMenu}>
                    <Image
                      src={Logo}
                      width={120}
                      height={40}
                      priority
                      alt="logo"
                    />
                  </Link>
                  <button onClick={closeMenu} className="text-primary">
                    <IoCloseSharp size={30} />
                  </button>
                </div>
                <hr className="mb-6 text-primary" />
                <div className="flex flex-col text-[20px] space-y-6 px-2 list-none">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About Us" },
                    { href: "/products", label: "Our Products" },
                    { href: "/career", label: "Career" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.href} className="relative">
                      <Link
                        href={item.href}
                        className={`block py-2 transition-all duration-300 ${
                          pathname === item.href
                            ? "text-primary"
                            : "text-dark-2"
                        }`}
                        onClick={closeMenu}
                      >
                        {item.label}
                        <span
                          className={`absolute left-0 bottom-0 w-full h-0.5 rounded-t-md transition-all duration-300 ${
                            pathname === item.href
                              ? "bg-primary"
                              : "bg-transparent"
                          }`}
                        ></span>
                      </Link>
                    </li>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Header;
