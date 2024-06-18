// Modal.jsx
import React from "react";
import {  X } from "lucide-react";
import {  useNavigate } from "react-router-dom";

const DetailCard = ({ show, onClose, book }) => {
  const Navigate=useNavigate();
  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + "...";
  };

  const handleReadNow=()=>{

  Navigate("/ReadingSection")
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  }

  if (!show) {
    return null;
  }
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-Montserrat">
      <div className="bg-white relative p-6 rounded-lg shadow-lg w-[90%] max-w-lg flex flex-col md:flex-row md:justify-between justify-center items-center gap-4">
        <div className="h-[210px] min-w-[150px] ">
          <img
            src={book.ImageUrl}
            alt=""
            className="h-[210px] w-[150px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 h-[210px] justify-between">
          <span className="text-[1.5rem] font-bold">{book.Book_name}</span>
          <span className="font-DancingScript text-primary text-[1.3rem] font-semibold">
            by: {book.Author_name}
          </span>
          <span className="flex flex-col gap-1 ">
            <span className="text-[0.9rem] font-semibold">Quick Read</span>
            <span className="text-[0.8rem]">{truncateText(book.Description, 100)}</span>
          </span>
          <span >
            <button className="bg-primary text-white w-[130px] h-[40px] rounded-[10px] transition-all duration-500 hover:translate-y-[-0.25rem]" onClick={handleReadNow}>
              read Now
            </button>
          </span>
        </div>
        <div className="absolute right-[6px] top-[8px] cursor-pointer" onClick={onClose}>
            <X/>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
