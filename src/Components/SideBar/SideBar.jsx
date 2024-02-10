import React from 'react';
import {
  IoHomeOutline,
  IoDocumentOutline,
  IoBicycleOutline,
} from 'react-icons/io5';
import { RiMenu2Fill } from 'react-icons/ri';
import { FiClock } from 'react-icons/fi';
import { TfiWallet } from 'react-icons/tfi';
import { MdOutlineContactSupport } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const SideBar = () => {
  return (
    <div id="sidebar" className="sidebar">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <img
          src="/src/assets/logo.png"
          className="logo"
          alt=""
        />
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={"/"}
              style={{ textDecoration: 'none' }}
            >
              <IoHomeOutline size={18} />
              <span > Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={{ textDecoration: 'none' }}
              className="nav-link"
              to={"/menu"}
            >
              <RiMenu2Fill size={18} />
              <span> Menu</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={{ textDecoration: 'none' }}
              className="nav-link"
              to={"/orderhistory"}
            >
              <FiClock size={18} />
              <span>Order History</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={{ textDecoration: 'none' }}
              className="nav-link"
              to={"/orders"}
            >
              <IoDocumentOutline size={18} />
              <span> Orders</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={{ textDecoration: 'none' }}
              className="nav-link"
              to={"/revenue"}
            >
              <TfiWallet size={18} />
              <span> Revenue</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={{ textDecoration: 'none' }}
              className="nav-link"
              to={"/rider"}
            >
              <IoBicycleOutline size={18} />
              <span> Riders</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={{ textDecoration: 'none' }}
              className="nav-link"
              to={"/help"}
            >
              <MdOutlineContactSupport size={18} />
              <span> Help and Support</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
