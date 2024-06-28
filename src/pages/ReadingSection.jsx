import React, { Suspense } from "react";
import Frame from "../components/Frame";
import { currentBookState } from "../../store/BookAtom";
import { useRecoilValue } from "recoil";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

export default function ReadingSection() {
  const currentBook = useRecoilValue(currentBookState);

  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };

  const handleLibrary = async (e) => {
    e.preventDefault();
    const authKey = localStorage.getItem("authKey");
    if (!authKey) {
      toast.warn("🦄 You are not Login", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/user/Library`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
          "X-Auth": authKey,
        },
        body: JSON.stringify({ bookID: currentBook._id }),
      });
      const resdata = await res.json();
      if (resdata) {
        toast.success(resdata.msg, {
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
    }
  };

  return (
    <>
      <Frame>
        <div className="flex md:justify-between justify-center md:gap-0 gap-5 md:items-center md:flex-row flex-col font-Montserrat  h-fit md:px-4   shadow-sm  shadow-slate-200 rounded-[10px]">
          <div className="flex gap-5">
            <div className="h-[140px] min-w-[100px] flex justify-center items-center">
              <img
                src={currentBook.ImageUrl}
                alt=""
                className="h-[130px] w-[100px] object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[1.5rem] font-bold gap-2 ">
                {currentBook.Book_name}
              </span>
              <span className="text-primary font-DancingScript text-[1.2rem] font-semibold">
                by: {currentBook.Author_name}
              </span>
              <span className="flex gap-1 md:gap-4 md:items-center flex-col md:flex-row items-start">
                <span className="flex flex-col">
                  <span className="pt-0 md:pt-2">
                    Genre: {currentBook.Genre}
                  </span>
                  <span> Rating: {currentBook.Star}/5</span>
                </span>
                <button
                  className="bg-primary text-white w-[130px] h-[30px] rounded-[10px] transition-all duration-500 hover:translate-y-[-0.25rem]"
                  onClick={(e) => handleLibrary(e)}
                >
                  Add to Library
                </button>
              </span>
            </div>
          </div>
          <div className="flex flex-col border-l-2 border-primary pl-5 md:mb-0 mb-6 pr-2">
            <div className="text-primary font-semibold">Short Description</div>
            <div>
              <p className="md:w-[400px] w-[100%] h-fit pr-1">
                {truncateText(currentBook.Description, 100)}
              </p>
            </div>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <div className="  shadow-sm  shadow-slate-200 rounded-[10px] lg:h-full h-fit">
            <iframe
              src={`${currentBook.PDFUrl}#navpanes=0&scrollbar=0`}
              frameBorder="0"
              className="w-[100%] lg:h-[100%] h-[500px] rounded-[10px] "
            ></iframe>
          </div>
        </Suspense>
      </Frame>
    </>
  );
}
