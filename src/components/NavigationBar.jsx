import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../AuthContext";

const NavigationBar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  console.log("User:", user);
  console.log("Is Authenticated:", isAuthenticated);

  return (
    <section className="">
      <div className="navbar bg-base-200 p-2">
        <div className="flex-1 gap-10">
          <a href="/" className="btn btn-ghost text-xl">
            La Storage
          </a>
          <a href="/">Home</a>
          <a href="/storage">My Storage</a>
        </div>
        <div className="flex-none gap-2">

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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow"
            >
              {isAuthenticated && user ? (
                <>
                  <div className="flex flex-col gap-1">
                    <p className="text-black ">Hi! {user.user.nama}</p>
                    <p>{user.user.email}</p>
                  </div>
                  <li>
                    <a href="/" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a href="/login">Login</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
