import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserImg from "../../assets/images/user.png";
import "./nav.css";

const Nav = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    fetch("navlink.json")
      .then((res) => res.json())
      .then((resData) => setNavLinks(resData));
  }, []);

  const links = (
    <>
      <li>
        <NavLink className="font-semibold uppercase" to="/">
          Home
        </NavLink>
      </li>
      {navLinks.slice(0, 4).map((link) => (
        <li key={link.id}>
          <NavLink className="font-semibold uppercase" to={link.name}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  const user = { email: false };

  return (
    <div className="max-w-screen-xl mx-auto navbar justify-between z-50">
      <div className="lg:hidden mr-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-neutral lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="flex-1 lg:flex-none">
        <a className="text-xl font-robotoslab font-extrabold">
          Event <span className="text-blue-500">Aura</span>
        </a>
      </div>
      <div className="hidden lg:flex lg:justify-center">
        <ul className="space-x-10 menu-horizontal px-1">{links}</ul>
      </div>
      {user?.email ? (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={UserImg} alt="User" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <a>Logout</a>
            </ul>
          </div>
        </div>
      ) : (
        <button className="btn bg-gray-700 text-white hover:text-black">
          Login
        </button>
      )}
    </div>
  );
};

export default Nav;
