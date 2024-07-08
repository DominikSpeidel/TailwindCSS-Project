import React, { useState } from "react";
import About_Icon from "./Icons/About_Icon";
import Contact_Icon from "./Icons/Contact_Icon";
import Menu_Icon from "./Icons/Menu_Icon";
import Home_Icon from "./Icons/Home_Icon";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="text-right md:text-xl">
      <div className="flex justify-end">
        <h1 className="font-bold uppercase p-4 md:mt-3">
          <a
            href="/"
            className="text-3xl md:text-4xl hover:text-gray-900 md:flex md:flex-col"
          >
            <span>Tischlein </span>
            <span>deck </span>
            <span>dich </span>
          </a>
        </h1>
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <Menu_Icon />
        </div>
      </div>

      <ul className={`mt-6 ${menuOpen ? "" : "hidden"} md:block`} id="menu">
        <li className="py-1 border-r-2 border-white hover:border-primary hover:text-gray-900">
          <Link
            href="/"
            className={`px-4 flex justify-end ${
              router.pathname === "/" && "text-gray-900"
            }`}
          >
            <span className="mr-2">Home</span>
            <Home_Icon />
          </Link>
        </li>
        <li className="py-1 border-r-2 border-white hover:border-primary hover:text-gray-900">
          <Link
            href="/ueber-uns"
            className={`px-4 flex justify-end ${
              router.pathname.startsWith("/ueber-uns") && "text-gray-900"
            }`}
          >
            <span className="mr-2">Über uns</span>
            <About_Icon />
          </Link>
        </li>
        <li className="py-1 border-r-2 border-white hover:border-primary hover:text-gray-900">
          <Link
            href="/kontakt"
            className={`px-4 flex justify-end ${
              router.pathname.startsWith("/kontakt") && "text-gray-900"
            }`}
          >
            <span className="mr-2">Kontakt</span>
            <Contact_Icon />
          </Link>
        </li>

        <li className="py-1 border-r-2 border-white hover:text-gray-900 max-md:hidden">
          <SignedIn>
            <Link href="/create" className="px-4 flex justify-end mt-10">
              <button className="text-base bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white w-28 h-28 rounded-full shadow-xl flex items-center justify-center text-center hover:from-cyan-500 hover:via-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-110">
                Rezept hinzufügen
              </button>
            </Link>
          </SignedIn>
        </li>
      </ul>
    </nav>
  );
}
