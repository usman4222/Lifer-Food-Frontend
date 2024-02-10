import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Chat from "../Chat/Chat";

const Navbar = () => {
  const handleSidebarToggle = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.remove("translate-x-[-100%]");
    sidebar.classList.add("translate-x-0");
    overlay.classList.remove("hidden");
  };

  const closeSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.add("translate-x-[-100%]");
    overlay.classList.add("hidden");
  };

  const [showOverlay, setShowOverlay] = useState(false);
  const [agentInfo, setAgentInfo] = useState({ name: '', email: '', id: '' });

  const handleHelpB2Click = () => {
    const agent = { username: 'Muhammad Irfan', email: 'Irfan@gmail.com', id: 'm.irfan 12' };

    setAgentInfo(agent);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  }

  return (
    <>
      <div className="w-full flex flex-row lg:justify-end justify-between items-center md:gap-x-3 p-4">
        <div className="lg:hidden bg-linkBg p-2 rounded-lg text-textActive">
          <HiMiniBars3BottomLeft size={20} onClick={handleSidebarToggle} />
        </div>
        <div className="flex flex-row gap-x-3 md:border-r md:border-gray-400 px-5 md:pl-[40%]">
          <div className="bg-linkBg p-2 rounded-lg text-textActive font-extrabold cursor-pointer relative">
            <GoBell />
            <div className="w-[15px] h-[15px] bg-primary rounded-full absolute top-[-5px] right-[-5px]"></div>
          </div>
          <NavLink
            className="bg-linkBg p-2 rounded-lg text-textActive font-extrabold cursor-pointer relative"
            onClick={handleHelpB2Click}
          >
            <BiSolidMessageSquareDots />
            <div className="w-[15px] h-[15px] bg-primary rounded-full absolute top-[-5px] right-[-5px]"></div>
          </NavLink>
        </div>
        <div className="text-primary hidden md:block">
          <span className="text-[15px]">Welcome,{"   "}</span>
          <span className="font-semibold">Restaurant</span>
        </div>
        <img
          src="/src/assets/profile.png"
          className="w-[50px] h-[50px] rounded-full"
          alt=""
        />
      </div>
      <div
        id="overlay"
        className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] hidden z-10"
        onClick={closeSideBar}
      ></div>
      {showOverlay && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center' onClick={closeOverlay}>
          <div className='bg-white p-20 py-5 rounded-2xl text-center '>
            <Chat />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;