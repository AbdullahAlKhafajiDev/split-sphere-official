import React, { useState } from "react";
import logo from "../Assets/Logo/AppLogo.png";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <div
        className={`pl-5 pr-5 laptop:pr-2 laptop:pl-2 w-screen h-[76px] text-white font-hind flex desktop:justify-center laptop:justify-center tablet:justify-between phone:justify-between items-center bg-gradient-to-r from-[#181348d5] to-[#a43ac8]`}
      >
        {/* Split Sphere Logo */}
        <a href="#home" className="text-[20px]  flex items-center">
          <img src={logo} className="" alt="Split Sphere Logo"></img>
          <p className="pl-2">Split Sphere</p>
        </a>
        {/* Middle links */}
        <div className="phone:hidden tablet:hidden">
          <span className="text-[16px]  desktop:pl-[7rem] desktop:pr-[7rem]  desktop:space-x-10 laptop:pl-[3rem] laptop:pr-[3rem] laptop:space-x-5 tablet:space-x-3  justify-center">
            <a href="#Exp">Our Expertise</a>
            <a href="#Work">Recent Work</a>
            <a href="#AboutUs">About Us</a>
            <a href="#Blog">Blogs</a>
          </span>
        </div>
        {/* Contact Me button */}
        <div
          onClick={() => setMenuVisible(!menuVisible)}
          id="toggleMenu"
          className="flex flex-row justify-center items-center cursor-pointer"
        >
          <button className="text-[16px]  border-2 pl-10 pr-10  pt-2 pb-1  phone:hidden">
            Contact Us
          </button>
          {menuVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 20 20"
              className="hidden tablet:block phone:block tablet:ml-5"
            >
              <path
                fill="white"
                d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12l3.005-3.005Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
              className="hidden tablet:block phone:block tablet:ml-5"
            >
              <path
                fill="none"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </div>
      </div>

      {menuVisible && <HamMenu />}
    </>
  );
}

function HamMenu() {
  return (
    <>
      <div className="hidden tablet:flex phone:flex flex-col justify-between font-hind w-screen h-[calc(100vh-76px)] p-5">
        <div className="flex flex-col text-[1.7rem] font-medium pt-2 space-y-2">
          <a href="#Exp">Our Expertise</a>
          <a href="#Work">Recent Work</a>
          <a href="#AboutUs">About Us</a>
          <a href="#Blog">Blogs</a>
        </div>
        <div>
          <p className="text-[1.2rem]">Get in Touch:</p>
          <button className="bg-[#474A8C] text-white text-[1.5rem]  p-2 w-[100%] mb-5">
            Contact Us
          </button>

          <hr className="h-[3px] bg-black mb-2 rounded" />
          <p>Austin, Texas</p>
        </div>
      </div>
    </>
  );
}
