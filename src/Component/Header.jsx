import React from "react";
import vio from "../assets/pic20.png";

const Header = () => {
  return (
    <header className="h-[12vh] flex justify-between font-[times-new-roman] items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={vio} alt="company logo" width={190} />
      </div>
      <nav className="flex gap-9 font-bold py-8 text-xl">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#discover" className="hover:underline">
          Discover
        </a>
        <a href="#login" className="hover:underline">
          Login
        </a>
        <a href="#Dashboard" className="hover:underline">
          Dashboard
        </a>
      </nav>
      <div className=" py-8">
        <button type="button" className=" rounded-md bg-orange-200 p-3">
          GET STARTED
        </button>
      </div>
    </header>
  );
};

export default Header;
