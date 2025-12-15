import React, { useEffect, useState } from "react";

const Header = () => {
return (
  <nav className="bg-black text-white">
    <div className="max-w-8xl mx-auto px-4 md:px-8 flex justify-between h-[80px] items-center">
    <div className="logo">
    <img
    src="/logo.png"
    alt="Logo Of The Company"
    width="130"
    className="object-contain"
    />
    </div>
    <ul className="hidden md:flex gap-x-10">
      <li><a className="hover:underline" href="#">Products</a></li>
      <li><a className="hover:underline" href="#">Cart</a></li>
      <li><a className="hover:underline" href="#">Orders</a></li>
      <li><a className="hover:underline" href="#">Hot Deals</a></li>
    </ul>
    <div className="hidden md:flex">
    <button className="mr-8">Log in</button>
    <button className="mr-6 border rounded-lg bg-blue-700 p-2 hover:scale-110 transition">Sign up</button>
    </div>
    </div>
  </nav>
);
}

export default Header