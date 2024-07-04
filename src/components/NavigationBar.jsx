import React from "react";
import { CgProfile } from "react-icons/cg";

const NavigationBar = () => {
  return (
    <section className="">
      <div className="navbar bg-base-200">
        <div className="flex-1 gap-10">
          <a href="/" className="btn btn-ghost text-xl">La Storage</a>
          <a href="/">Home</a>
          <a href=""></a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="">
              <CgProfile className="w-10 h-10" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/login">Login</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
