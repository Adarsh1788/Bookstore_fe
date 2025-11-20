import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleAuth, loginUser, registerUser } from "../../services/AllApi";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Auth = ({ insideRegister }) => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();
  const onRegisterClick = async () => {
    try {
      let apiResponse = await registerUser(registerData);
      console.log(apiResponse);
      if (apiResponse.status == 201) {
        toast("successfully registered");
        navigate("/login");
      } else {
        toast(apiResponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast("error occured");
    }
  };

  const onLoginClick = async () => {
    try {
      let reqBody = registerData;
      delete reqBody.userName;

      let apiResponse = await loginUser(reqBody);
      console.log(apiResponse);
      if (apiResponse.status == 200) {
        localStorage.setItem("token", apiResponse.data.token);
        localStorage.setItem("user", JSON.stringify(apiResponse.data.user));
        toast("login success");
        navigate("/");
      } else {
        toast(apiResponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const googleDecode = async (credId) => {
    const decoded = jwtDecode(credId);
    console.log(decoded);

    let reqBody ={
      userName:decoded.name,
      email:decoded.email,
      profilePic:decoded.picture
    }
    let apiResponse = await googleAuth(reqBody)
    console.log(apiResponse)
    if (apiResponse.status==200||apiResponse.status==201) {
        localStorage.setItem("token", apiResponse.data.token);
        localStorage.setItem("user", JSON.stringify(apiResponse.data.user));
        toast("login success");
        navigate("/");
      }else{
        toast("error occured in google authentication")
      }

  };

  return (
    <>
      <div id="login-img" className="">
        <h1 className="text-xl text-center">Book Store</h1>
        <div className="text-3xl mx-100 text-white">
          <div className="h-150 ">
            <div
              className="bg-gray-900 p-10  justify-center items-center"
              action=""
            >
              {insideRegister ? (
                <h2 className="text-3xl text-center">Register</h2>
              ) : (
                <h2 className="text-3xl text-center">Login</h2>
              )}

              <div className="">
                {insideRegister ? (
                  <input
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        userName: e.target.value,
                      })
                    }
                    placeholder="username"
                    className="py-2 px-4 bg-white text-black placeholder-gray-400 w-sm mt-10"
                    type="text"
                  />
                ) : (
                  ""
                )}
                <input
                  onChange={(e) =>
                    setRegisterData({ ...registerData, email: e.target.value })
                  }
                  placeholder="email id"
                  className="py-2 px-4 bg-white  text-black placeholder-gray-400 w-sm mt-10"
                  type="text"
                />
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                  placeholder="Password"
                  className="py-2 px-4 bg-white text-black placeholder-gray-400 w-sm mt-10"
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <h3 className="text-sm text-amber-600 mt-3">
                  *Never share your password with others
                </h3>
                <h6 className="text-sm underline mt-3 ">Forget Pasword</h6>
              </div>
              <div className="ms-15 ">
                {insideRegister ? (
                  <button
                    onClick={onRegisterClick}
                    type="button"
                    className="text-white px-25 py-5 bg-green-700  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 dark:focus:ring-green-800"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    onClick={onLoginClick}
                    type="button"
                    className="text-white px-25 py-5 bg-green-700  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4 dark:focus:ring-green-800"
                  >
                    Login
                  </button>
                )}
              </div>
              <h2 className="text-center text-white">
                --------------or-------------
              </h2>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  googleDecode(credentialResponse.credential);
                }}
                onError={() => {
                  console.log("Login Failed");
                  toast("google autentication failed");
                }}
              />

              {insideRegister ? (
                <div className="flex mt-5">
                  {" "}
                  <h1 className="text-xl">Already an existing user?</h1>
                  <Link to={"/login"} className="text-xl text-blue-700 ms-5">
                    Login
                  </Link>
                </div>
              ) : (
                <div className="flex mt-5">
                  {" "}
                  <h1 className="text-xl">Are You a New User</h1>
                  <Link to={"/register"} className="text-xl text-blue-700 ms-5">
                    Register?
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
