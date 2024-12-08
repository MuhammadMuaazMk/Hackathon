import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const HeaderMain = () => {


  return (
    <header className="border-b py-4 px-6 bg-white shadow-md">
      <div className=" mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl pl-5 font-bold text-gray-800">
          Bandage
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <div
            className="flex items-center"
          >
            <button className="hover:text-blue-500">Shop</button>
            <IoMdArrowDropdown />
          </div>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="/blog" className="hover:text-blue-500">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
          <Link href="/pages" className="hover:text-blue-500">
            Pages
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4 pl-5">
          <Link href="/login" className="hidden md:flex items-center space-x-1">
            <FaUser className="text-blue-600" />
            <span className="text-blue-600">Login / Register</span>
          </Link>
          <button>
            <FaSearch className="text-blue-600" />
          </button>
          <button className="relative">
            <FaShoppingCart className="text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
              1
            </span>
          </button>
          <button className="relative">
            <FaHeart className="text-blue-600 " />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
              1
            </span>
            
          </button>
         
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-gray-600">☰</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
