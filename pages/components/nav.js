import React, { useState } from "react";
import About_Icon from "./Icons/About_Icon";
import Contact_Icon from "./Icons/Contact_Icon";
import Menu_Icon from "./Icons/Menu_Icon";
import Home_Icon from "./Icons/Home_Icon";
import Link from "next/link";
import { SignedIn } from "@clerk/nextjs";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="text-right">
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
          <Link href="/" className="px-4 flex justify-end">
            <span className="mr-2">Home</span>
            <Home_Icon />
          </Link>
        </li>
        <li className="py-1 border-r-2 border-white hover:border-primary hover:text-gray-900">
          <Link href="/ueber-uns" className="px-4 flex justify-end">
            <span className="mr-2">Über uns</span>
            <About_Icon />
          </Link>
        </li>
        <li className="py-1 border-r-2 border-white hover:border-primary hover:text-gray-900">
          <Link href="/kontakt" className="px-4 flex justify-end">
            <span className="mr-2">Kontakt</span>
            <Contact_Icon />
          </Link>
        </li>

        <li className="py-1 border-r-2 border-white hover:border-primary hover:text-gray-900">
          <SignedIn>
            <Link href="/create" className="px-4 flex justify-end">
              <span className="mr-2">Füge ein neues Rezept hinzu </span>
            </Link>
          </SignedIn>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
