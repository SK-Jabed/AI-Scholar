"use client";
import { GraduationCap, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { doLogout } from "@/app/actions";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  // console.log(session?.user);
  const [data, refetch] = useGetAllUsers();
  // console.log(data);
  const currentUser = data?.find((user) => user.email === session?.user?.email);
  // Skip rendering the navbar on the dashboard page
  // console.log(currentUser);
  if (pathname.includes("dashboard")) {
    return null;
  }

  // Links for the navbar
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
  ];

  // Memoize authLink to prevent unnecessary re-renders
  const authLink = useCallback(
    () => (
      <div className="flex space-x-3">
        {session?.user ? (
          <>
            <div className=" rounded-full p-1 w-16 h-12 flex items-center justify-center overflow-hidden">
              {currentUser?.image ? (
                <Image
                  src={currentUser.image}
                  alt="Profile"
                  width={48}
                  height={48}
                  className="rounded-full "
                />
              ) : (
                <User className="w-6 h-6 text-gray-500" />
              )}
            </div>

            {/* <p className="btn btn-outline">{session?.user?.email}</p> */}
            <button
              onClick={doLogout}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-md shadow-md hover:scale-105 transition transform"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href={"/login"}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-md shadow-md hover:scale-105 transition transform"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 px-5 py-2 rounded-md shadow-md hover:scale-105 transition transform"
            >
              Register
            </Link>
          </>
        )}
      </div>
    ),
    [session?.user]
  );

  // Mobile menu toggle handler
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-white sticky top-0 z-50 mt-1.5">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24 py-2">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <h1>
            <Link href="/" className="flex items-center hover:text-black">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="font-extrabold md:text-2xl text-[16px]">
                AI Scholar
              </span>
            </Link>
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-5 md:gap-4 text-gray-700 font-medium border border-gray-300 rounded-4xl p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-blue-600 transition relative ${
                  pathname === link.href
                    ? "text-blue-600 font-semibold after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-600 after:transition-all"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex">{authLink()}</div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full p-4 bg-white transition-transform duration-300 ease-in-out shadow-lg md:hidden">
          <div className="flex justify-between p-6">
            {/* logo */}
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500">
              AI Scholar
            </h1>
            <button onClick={toggleMenu} className="text-gray-600">
              <X size={24} />
            </button>
          </div>
          {/* nav link */}
          <nav className="flex flex-col gap-5 px-6 text-gray-700 font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu} // Close the menu on click
                className={`hover:text-blue-600 transition text-lg ${
                  pathname === link.href ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Auth Link */}
            <div className="mt-4 mb-4">{authLink()}</div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
