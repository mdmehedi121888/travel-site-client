import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="flex-1">
          <Link to={"/"}>
            <img className="h-16 " src="/images/logo.png"></img>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="flex gap-5 font-bold text-xl">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <Link to={"/news"}>News</Link>
            <Link>Destination</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            <Link>
              <button className="btn btn-secondary  px-5">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
