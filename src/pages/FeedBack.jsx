import React, { useState } from "react";
import logo from "../assets/images/Logo.png";
import { toast } from "react-toastify";
export default function FeedBack() {
  const [FeedBackData, setFeedBack] = useState({
    Name: "",
    Email: "",
    feedback: "",
  });

  const handleFeedback = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/FeedBack`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
      body: JSON.stringify(FeedBackData),
    });

    const resdata = await res.json();
    if (resdata.msg == "feedback send successfully!") {
      setFeedBack({
        Name: "",
        Email: "",
        feedback: "",
      });
      toast.success("feedback send successfully! ", {
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

  const handleLoad = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-primary flex items-center justify-center pt-[130px] pb-10 overflow-x-hidden"  onLoad={handleLoad}>
        <div className="bg-white lg:w-6/12 md:7/12 w-[90%] shadow-3xl rounded-xl">
          <div className="bg-black shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-6">
            <img src={logo} alt="" className="h-[50px] w-[50px]" />
          </div>
          <div className="max-w-xl mx-auto  flex w-full flex-col rounded-lg  p-8">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
              Feedback
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              If you had any issues or you liked our product, please share with
              us!
            </p>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                value={FeedBackData.Name}
                onChange={(e) =>
                  setFeedBack({
                    ...FeedBackData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                value={FeedBackData.Email}
                onChange={(e) =>
                  setFeedBack({
                    ...FeedBackData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="feedback"
                value={FeedBackData.feedback}
                onChange={(e) =>
                  setFeedBack({
                    ...FeedBackData,
                    [e.target.name]: e.target.value,
                  })
                }
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>
            <button
              className="rounded border-0 bg-gradient-to-r from-red-400 to-red-600 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
              onClick={(e) => handleFeedback(e)}
            >
              Send
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Feel free to connect with us on social media platforms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
