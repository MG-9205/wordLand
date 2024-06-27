import { useState } from "react";
import { Link } from "react-router-dom";
import { userState } from "../../store/UserAtom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const [signInData, setSignInData] = useState({
    Username: "",
    Password: "",
    Email: "",
  });
  const [Error, setError] = useState("");

  const setUserState = useSetRecoilState(userState);

  const Navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
      body: JSON.stringify(signInData),
    });
    const resBody = await res.json();
    const authKey = res.headers.get("X-Auth");
    if (authKey) {
      localStorage.setItem("authKey", authKey);
      localStorage.setItem("username", signInData.Username);
      setUserState(signInData.Username);
      setSignInData({
        Username: "",
        Password: "",
        Email: "",
      });
      setError("");
      Navigate("/");
      toast.success("SignUp successfully ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setError(resBody.msg);
      toast.error(resBody.msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-[100vh] ">
        <div className="flex justify-center items-center flex-col border-2 w-[85vw] md:w-[420px] pb-5 rounded-[10px] ">
          <div className="w-full  flex flex-col justify-end  pb-20 mb-7 bg-primary rounded-br-[150px] ">
            <div className="w-full flex flex-col  items-start ml-5 mt-2 ">
              <p className="text-4xl font-semibold  text-white z-10 text-left">
                Create
              </p>
              <p className="text-4xl font-semibold  text-white z-10 text-left">
                Account
              </p>
              <p className="text-xm font-medium text-white mt-4 z-10 text-left">
                Please sign-up to continue!
              </p>
            </div>
          </div>

          <div className="w-[80vw] md:w-[400px]  flex flex-col items-center mt-10 mx-3">
            <div className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Username"
                name="Username"
                value={signInData.Username}
                onChange={(e) =>
                  setSignInData({
                    ...signInData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-primary"
              />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={signInData.Email}
                onChange={(e) =>
                  setSignInData({
                    ...signInData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-red-400"
              />
              <input
                type="password"
                placeholder="Password example(123#aB)"
                name="Password"
                value={signInData.Password}
                onChange={(e) =>
                  setSignInData({
                    ...signInData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full h-12 outline-none border border-solid border-gray-300 rounded-lg px-4 transition duration-200 ease-in-out mb-5 focus:border-red-400"
              />
            </div>
            {Error && (
              <span className=" text-red-500 text-center font-Montserrat font-bold ">
                {Error}
              </span>
            )}
            <button
              type="submit"
              className="w-[80%] max-w-150 px-4 py-2 text-white text-base font-semibold rounded-full cursor-pointer transition duration-300 ease-in-out bg-gradient-to-r from-red-400 to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:brightness-103 my-5"
              onClick={(e) => handleSignin(e)}
            >
              SignUp
            </button>
            <span className="text-[1.3rem] text-gray-400 font-medium ">
              Already have an account?
              <Link
                to="/Login"
                className="text-[1.2rem] text-primary font-medium underline border-b border-dashed pl-2"
              >
                Signin
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
