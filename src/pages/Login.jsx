import React from "react";

const Login = () => {
  return (
    <>
      <div id="login-img" className="">
        
        <div className="text-3xl mx-100 bg-gray-900 text-white">
          <div className="h-160 ">
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
                <h3 className="text-sm mt-3">
                  *Never share your password with others
                </h3>
                <h6 className="text-sm underline mt-3">Forget Pasword</h6>
              </div>
              <div className="ms-10">
                <button
                  type="button"
                  class="text-white bg-green-700  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 dark:focus:ring-green-800"
                >
                  Green
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login