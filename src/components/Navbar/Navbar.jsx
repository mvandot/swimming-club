import React, { useState, useRef, useEffect } from "react";
import { links } from "../../data/Links";
import { FaBars } from "react-icons/fa";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="bg-white shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img
            src={getImageUrl("navbar", "swimming-club.png")}
            class="h-8"
            alt=""
          /> */}
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Swimming Club Tivoli
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-gray-700 md:hidden hover:text-blue-600 hover:rotate-90 transition-all duration-300 ease-linear"
          onClick={toggleLinks}
        >
          <FaBars />
        </button>
        <div
          className="overflow-hidden w-full h-0 md:!h-auto transition-all duration-300 ease-linear md:block md:w-auto"
          ref={linksContainerRef}
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
            ref={linksRef}
          >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a
                    href={url}
                    className="block py-2 px-3 text-gray-900 uppercase hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-400 md:p-0"
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
