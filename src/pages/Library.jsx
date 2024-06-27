import React, { useEffect, useState } from "react";
import Frame from "../components/Frame";
import { User, Plus, X } from "lucide-react";
import { userState } from "../../store/UserAtom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import Card1 from "../components/Card1";
import { bookDataSelector } from "../../store/BookAtom";
import { toast } from "react-toastify";

export default function Library() {
  const userStateValue = useRecoilValue(userState);
  const BookData = useRecoilValue(bookDataSelector);
  const navigate = useNavigate();
  const [bookIDs, setBookIDs] = useState([]);
  const [LibraryBook, setLibraryBook] = useState([]);

  useEffect(() => {
    const fetchLibraryData = async () => {
      if (userStateValue === "Login") {
        navigate("/");
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
      } else {
        const authKey = localStorage.getItem("authKey");
        const res = await fetch(`${import.meta.env.VITE_API_URL}/user/Library`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_API_KEY,
            "X-Auth": authKey,
          },
        });
        const resdata = await res.json();
        setBookIDs(resdata.LibraryData);
      }
    };

    fetchLibraryData();
  }, [userStateValue, navigate]);

  useEffect(() => {
    if (bookIDs.length > 0 && BookData.Books.length > 0) {
      const filteredBooks = BookData.Books.filter((book) =>
        bookIDs.includes(book._id)
      );
      setLibraryBook(filteredBooks);
    }
  }, [bookIDs, BookData]);

  if (userStateValue === "Login") {
    return null;
  }

  const HandleDelete = async (book) => {
    try {
      const authKey = localStorage.getItem("authKey");
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/user/Library?remove=true`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key":import.meta.env.VITE_API_KEY,
            "X-Auth": authKey,
          },
          body: JSON.stringify({ bookID: book._id }),
        }
      );
      console.log(book._id);
      const resData = await res.json();
      setBookIDs(bookIDs.filter((id) => id !== book._id));
      setLibraryBook(LibraryBook.filter((b) => b._id !== book._id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Frame>
      <div className="flex md:justify-between justify-center md:gap-0 gap-5 md:items-center md:flex-row flex-col font-Montserrat h-fit md:px-4 shadow-sm shadow-slate-200 rounded-[10px]">
        <div className="flex gap-5">
          <div className="h-[140px] min-w-[100px] flex justify-center items-center">
            <div className="bg-slate-200 px-4 py-4 rounded-[50%]">
              <User className="h-[70px] w-[70px]" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[1.5rem] font-bold gap-2">
              {userStateValue}
            </span>
            <span className="text-primary text-[1.2rem] font-semibold">
              No of Book : {bookIDs.length}
            </span>
          </div>
        </div>
        <div className="flex flex-col border-l-2 border-primary pl-5 md:mb-0 mb-6 pr-2 h-[80%] items-start">
          <div className="text-center text-primary text-[1.2rem] font-semibold">
            Add more Book
          </div>
          <div className="w-[200px] h-[100%] py-2 bg-slate-200 flex justify-center items-center rounded-[10px]">
            <div className="bg-white px-2 py-2 rounded-[50%]" onClick={()=>navigate('/Explore')}>
              <Plus className="h-[40px] w-[40px] text-slate-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-sm shadow-slate-200 rounded-[10px] lg:h-full h-fit flex flex-wrap gap-7 pt-4 lg px-3 justify-center lg:justify-start items-start">
        {LibraryBook.map((ele, key) => (
          <div className="relative" key={key}>
            <Card1 key={key} book={ele} />
            <X
              className="text-white bg-primary flex rounded-[50%] px-1 py-1 justify-center items-center absolute top-[-10px] z-10 right-[-10px]"
              onClick={() => HandleDelete(ele)}
            />
          </div>
        ))}
      </div>
    </Frame>
  );
}
