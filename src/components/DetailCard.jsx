import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ShowDetailCard } from "../../store/BookAtom";
import { toast } from "react-toastify";
import { currentBookState } from "../../store/BookAtom";

const DetailCard = () => {
  const Navigate = useNavigate();
  const [currentBook, currentBookStateSet] = useRecoilState(currentBookState);
  const [DetailCardvalue, setdetailCard] = useRecoilState(ShowDetailCard);
  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };

  const handleReadNow = () => {
    Navigate("/ReadingSection");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setdetailCard(false);
  };

  const handleCloseModal = () => {
    setdetailCard(false);
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

  if (!DetailCardvalue) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50 font-Montserrat">
      <div className="bg-white relative p-6 rounded-lg shadow-lg w-[90%]  max-w-[530px] flex flex-col md:flex-row md:justify-between justify-center items-center gap-4">
        <div className="h-[220px] min-w-[150px] ">
          <img
            src={currentBook.ImageUrl}
            alt=""
            className="h-[220px] w-[150px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 h-[220px] justify-between">
          <span className="text-[1.5rem] font-bold ">
            {currentBook.Book_name}
          </span>
          <span className="font-DancingScript text-primary text-[1.3rem] font-semibold">
            by: {currentBook.Author_name}
          </span>
          <span className="flex flex-col gap-1 ">
            <span className="text-[0.9rem] font-semibold">Quick Read</span>
            <span className="text-[0.8rem]">
              {truncateText(currentBook.Description, 100)}
            </span>
          </span>
          <span className="flex gap-3">
            <button
              className="bg-primary text-white w-[130px] h-[40px] rounded-[10px] transition-all duration-500 hover:translate-y-[-0.25rem]"
              onClick={handleReadNow}
            >
              read Now
            </button>
            <button
              className="bg-primary text-white w-[130px] h-[40px] rounded-[10px] transition-all duration-500 hover:translate-y-[-0.25rem]"
              onClick={(e) => handleLibrary(e)}
            >
              Add to Library
            </button>
          </span>
        </div>
        <div
          className="absolute right-[6px] top-[8px] cursor-pointer"
          onClick={handleCloseModal}
        >
          <X />
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
