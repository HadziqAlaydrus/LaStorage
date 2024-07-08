import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="">
      <footer className="footer bg-gray-200 text-black items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>
            Copyright © Hadziq Alaydrus {new Date().getFullYear()} - All right
            reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.youtube.com/@Jikkuuu"
                target="_blank"
                rel="noopener noreferrer">
            <FaYoutube className="w-8 h-8 hover:scale-110 transition-all cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/hadziqalaydrus/"
                target="_blank"
                rel="noopener noreferrer">
            <FaInstagram className="w-8 h-8 hover:scale-110 transition-all cursor-pointer" />
          </a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
