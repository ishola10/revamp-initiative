import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EEF1F6]  text-black  pt-12 px-10">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <Image src="/image/icons/logo.png" width={60} height={60} alt="logo" />
          </div>
          <p className="mt-3 text-sm max-w-xs">
            Recognizing the disparity in access to opportunities, education, healthcare, and sustainable livelihoods, the initiative is built on the principle of creating lasting positive social change THROUGH CREATIVITY.
          </p>
          <div className="flex space-x-4 mt-4 text-lg">
            <a href="https://www.instagram.com/therevamp_initiative?igsh=d2swc20zNTFxcHFw&utm_source=qr" className="text-gray-600 hover:text-black">
              <FaInstagram />
            </a>
            <a href="https://x.com/the_revamp_?s=21" className="text-gray-600 hover:text-black">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/share/1BPQFpTGF1/?mibextid=wwXIfr" className="text-gray-600 hover:text-black">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Address</h3>
          <p className="text-sm mt-2">93, JJ Eboigbe Street, Mabushi, Abuja</p>
          <p className="text-sm mt-1">09163577386</p>
          <p className="text-sm mt-1">revampinitiatives@gmail.com</p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link className="text-sm hover:text-yellow-500" href="/about">About</Link></li>
            <li><Link className="text-sm hover:text-yellow-500" href="/contact">Contact Us</Link></li>
            <li><Link className="text-sm hover:text-yellow-500" href="/project">Our Projects</Link></li>
            <li><a href="#" className="text-sm hover:text-yellow-500">Articles</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-600 border-t-2 py-6 text-sm mt-8">
        © 2025 Revamp Initiatives. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
