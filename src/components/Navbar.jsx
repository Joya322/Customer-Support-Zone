import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="flex justify-between items-center py-3 w-11/12 mx-auto">
        <div className="">
          <a className="btn btn-ghost text-xl">
            CS<i class="fa-solid fa-minus"></i>Ticket System
          </a>
        </div>
        <div className="">
          <ul className="hidden lg:flex justify-center items-center gap-5">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <button className="btn text-white bg-linear-to-br from-purple-800 to-purple-400">
                + New Ticket
              </button>
            </li>
          </ul>

          <details class="dropdown lg:hidden ">
            <summary class="btn btn-ghost m-1">
              <i class="fa-solid fa-bars"></i>
            </summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm right-2">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
