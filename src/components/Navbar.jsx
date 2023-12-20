import React from "react";

function Navbar() {
  return (
    <div>
      <header>
        <nav className="myContainer flex shadow-md mb-4 py-8 mx-auto justify-between px-10">
          <h1 className="text-[#f1356d] text-2xl font-bold">The Dojo Blog</h1>
          <ul className="flex">
            <li>
              <a className="mr-5 hover:text-[#f1356d]" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#f1356d]">
                New Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
