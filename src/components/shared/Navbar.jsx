"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  const authLink = (
    <div className="flex space-x-3">
      <Link
        href="/login"
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-md shadow-md hover:scale-105 transition transform"
      >
        Login
      </Link>

      {/* login , logout, login with email and password handlers  */}

      {/* <button onClick={() => doSocialLogin("google")}> google</button>
      <button onClick={() => doSocialLogin("github")}> Github</button>
      <button onClick={() => doLogout()}> Sign Out</button>
      <button
        onClick={() =>
          doCredentialLogin({
            email: "abc@gmail.com",
            password: "145454",
          })
        }
      >
        {" "}
        Credential
      </button> */}
      <Link
        href="/register"
        className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 px-5 py-2 rounded-md shadow-md hover:scale-105 transition transform"
      >
        Register
      </Link>
    </div>
  );

  return (
    <header className="bg-white sticky top-0 z-50 mt-1.5">
      <div className="mx-auto max-w-7xl px-6 md:py-3 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <h1>
            <Link
              href="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500"
            >
              AI Scholar
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
          <div className="hidden md:flex">{authLink}</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full p-4  bg-white transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-transform duration-300 ease-in-out shadow-lg md:hidden`}
      >
        <div className="flex justify-between p-6">
          {/* logo */}
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500">
            AI Scholar
          </h1>
          {/*  */}
          <button onClick={() => setIsOpen(false)} className="text-gray-600">
            <X size={24} />
          </button>
        </div>
        {/* nav link */}
        <nav className="flex flex-col gap-5 px-6 text-gray-700 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`hover:text-blue-600 transition text-lg ${
                pathname === link.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Auth Link */}
          <div className="mt-4 mb-4">{authLink}</div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
