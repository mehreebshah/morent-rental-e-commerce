"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../public/Logo.png";
import profile from "../../../public/Image.png";
import { GoSearch } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { GiCartwheel } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { useWishlist} from "../context/wishlistContext";
const Navbar = () => {
  const { likedCars } = useWishlist();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const name = formData.get("name") as string;

  //   if (name) {
  //     router.push(`/list?name=${name}`);
  //   }
  // };

  return (
    <nav className="flex flex-wrap justify-between items-center border-b shadow-xl border-stone-200 h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Hamburger Menu Button (visible on small screens) */}
      <button
        className="sm:hidden text-2xl focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="relative">
          <Image
            src={profile}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 sm:hidden">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
            <Link href="/wishlist" className="relative group hover:text-blue-400">
            <IoIosHeartEmpty className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 bg-zinc-800 text-zinc-200 w-5 h-5 rounded-full text-xs flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black font-semibold">
              {likedCars.length} {/* Display the number of liked cars */}
            </span>
          </Link>
            <Link
              href="/settings"
              className="relative group hover:text-blue-400"
            >
              <IoMdSettings className="w-7 h-7" />
            </Link>
            <Link href="/menu" className="relative group hover:text-blue-400">
              <GiCartwheel className="w-7 h-7" />
            </Link>
          </ul>
        </div>
      )}

      {/* Search Bar */}
      <div className="sm:flex w-full md:w-auto mt-4 md:mt-0">
        <form
          className="flex items-center justify-between border border-gray-200 p-2 rounded-lg w-full md:w-[300px] lg:w-[400px] xl:w-[500px]"
          // onSubmit={handleSearch}
        >
          <GoSearch className="text-xl text-gray-600 cursor-pointer" />
          <input
            type="text"
            name="name"
            placeholder="Search something here"
            className="bg-transparent outline-none flex-grow px-2 text-sm sm:text-base"
          />
          <HiOutlineDotsHorizontal className="text-xl text-gray-600 cursor-pointer mx-2" />
        </form>
      </div>

      {/* Icons and Profile Section */}
      <div className="hidden sm:flex items-center space-x-5">
        {/* Cart Icon */}
        <Link href="/wishlist" className="relative group hover:text-blue-400">
            <IoIosHeartEmpty className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 bg-zinc-800 text-zinc-200 w-5 h-5 rounded-full text-xs flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black font-semibold">
              {likedCars.length} {/* Display the number of liked cars */}
            </span>
          </Link>

        {/* Settings Icon */}
        <Link href="/settings" className="relative group hover:text-blue-400">
          <IoMdSettings className="w-7 h-7" />
        </Link>
        <Link href="/menu" className="relative group hover:text-blue-400">
          <GiCartwheel className="w-7 h-7" />
        </Link>

        {/* Profile Section */}
        <div className="relative">login</div>
      </div>
    </nav>
  );
};

export default Navbar;
