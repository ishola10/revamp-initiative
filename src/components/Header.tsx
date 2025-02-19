"use client";

import React, { useState } from "react";
import { routes } from "@/helpers/util";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black flex justify-between items-center py-5 px-6 md:px-10 border-b border-white/[.2]">
      <div className="flex items-center gap-2">
        <Image src="/image/Revamp-logo-2.png" width={50} height={50} alt="logo" />
        <h1 className="text-white font-semibold text-xl md:text-2xl" style={{ WebkitTextStroke: "1px #E7DEFE" }}>
          Revamp Initiatives
        </h1>
      </div>

      <nav className="hidden md:flex gap-6">
        {routes.map((item, index) => (
          <Link key={index} href={item.route} className={`px-2 py-3 transition ${pathname.includes(item.route) ? "text-[#FFB110]" : "text-white"} hover:text-[#FFB110]`}>
            {item.name}
          </Link>
        ))}
      </nav>

      <button className="hidden md:block py-2 px-4 border border-[#FFC602] rounded-lg text-[#FFC602]">
        Donate
      </button>

      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`absolute top-0 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-8 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {routes.map((item, index) => (
          <Link key={index} href={item.route} onClick={() => setMenuOpen(false)} className={`text-lg ${pathname.includes(item.route) ? "text-[#FFB110]" : "text-white"} hover:text-[#FFB110]`}>
            {item.name}
          </Link>
        ))}
        <button className="py-2 px-4 border border-[#FFC602] rounded-lg text-[#FFC602]">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Header;
