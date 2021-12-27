import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-600 ">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? "inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                : "inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            }
          >
            Preetham
          </NavLink>
          <NavLink
            to="/post"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-100 bg-red-700"
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/preethamms/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/always__the__alpha/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/preethamMSalpha/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
