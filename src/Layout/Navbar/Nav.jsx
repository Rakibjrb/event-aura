import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import toast from "react-hot-toast";
import UserImg from "../../assets/images/user.png";
import "./nav.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const navLinks = [
  {
    id: 0,
    link: "services",
    name: "Services",
  },
  {
    id: 1,
    link: "about-us",
    name: "About Us",
  },
  {
    id: 2,
    link: "contact-us",
    name: "Contact Us",
  },
];

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink className="font-semibold uppercase" to="/">
          Home
        </NavLink>
      </li>
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink className="font-semibold uppercase" to={`/${link.link}`}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("User Logged Out....");
      })
      .catch(() => {
        toast.error("something went wrong !!!");
      });
  };

  return (
    <div className="bg-[#ffffffc5] sticky top-0 z-50">
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
                className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <div className="flex flex-col gap-2 py-3">
                  <button>{user.displayName}</button>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </ul>
            </div>
          </div>
        ) : (
          <Link
            to="/user-login"
            className="btn bg-gray-700 text-white hover:text-black"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
