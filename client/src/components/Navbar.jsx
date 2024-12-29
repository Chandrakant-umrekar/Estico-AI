import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/AppContext";
import axios from "axios";

function Navbar() {
  const { user, setShowLogin, credit, logout } = useUser();

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between pt-2">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy-credits")}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-300"
            >
              <img src={assets.credit_star} alt="credit_star" className="w-5" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                credit left: {credit}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">hi, {user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="user_logo"
                className="w-10 drop-shadow"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-20 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 rounded-md bg-white border text-sm">
                  <li
                    onClick={logout}
                    className="py-1 px-2 cursor-pointer pr-10"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy-credits")}
              className="cursor-pointer"
            >
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="px-8 py-2 text-white cursor-pointer text-sm font-semibold text-center bg-[#0c0c0c] rounded-full outline-none border-none transition-all duration-200  ease-in-out delay-0 hover:bg-[#3838ff] hover:scale-[0.95]"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
