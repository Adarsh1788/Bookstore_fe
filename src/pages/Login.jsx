import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div id="login-img" className="">
           <h1 className="text-xl text-center">Book Store</h1>
        <div className="text-3xl mx-100 bg-gray-900 text-white">
       
          <div className="h-150 ">
            <form
              className="bg-gray-900 p-10  justify-center items-center"
              action=""
            >
              <h2 className="text-3xl text-center">Login</h2>
              <div className="">
                <input
                  placeholder="Email id"
                  className="py-2 px-4 bg-white  placeholder-gray-400 w-sm mt-10"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  className="py-2 px-4 bg-white  placeholder-gray-400 w-sm mt-10"
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <h3 className="text-sm text-amber-600 mt-3">
                  *Never share your password with others
                </h3>
                <h6 className="text-sm underline mt-3">Forget Pasword</h6>
              </div>
              <div className="ms-15 ">
                <button
                  type="button"
                  class="text-white px-25 py-5 bg-green-700  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 dark:focus:ring-green-800"
                >
                  Login
                </button>
              </div>
              <h2>--------------or-------------</h2>
              <div className="text-center mt-5">
                <button
                  type="button"
                  class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                >
                  <svg
                    class="w-4 h-4 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </div>

              <div className="flex">
                {" "}
                <h1 className="text-xl">Are You a New User</h1>
                <Link className="text-xl text-blue-700">Register?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
