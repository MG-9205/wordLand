import React, { useMemo } from "react";
import img2 from "../assets/images/bookReading1.png";
import img3 from "../assets/images/authorWord.png";
import Frame from "../components/Frame";
import {
  bookDataSelector,
  ShowDetailCard,
  currentBookState,
} from "../../store/BookAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";

const BookCard = ({ book }) => {
  const setdetailCard = useSetRecoilState(ShowDetailCard);
  const setCurrentBook = useSetRecoilState(currentBookState);
  const handleReadNowClick = () => {
    setCurrentBook(book);
    setdetailCard(true);
  };
  return (
    <>
      <div className=" flex flex-col justify-center items-center lg:gap-2 gap-y-4 ">
        <div className="lg:h-[100px] lg:w-[90px] h-[150px] w-[120px] flex justify-center items-center ">
          <img
            src={book.ImageUrl}
            alt=""
            className="lg:h-[100px] lg:w-[70px] h-[150px] w-[120px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 font-Montserrat justify-center items-center">
          <span className="font-bold text-[1rem] font-DancingScript text-center w-[90px]">
            {book.Book_name}
          </span>
          <span
            className="font-semibold text-[0.8rem] text-primary hover:text-red-800 cursor-pointer"
            onClick={handleReadNowClick}
          >
            Know More!
          </span>
        </div>
      </div>
    </>
  );
};

export default function Explore() {
  const Books = useRecoilValue(bookDataSelector);
  const BookCategory = {
    Adventure: [],
    Mystery: [],
  };

  const fun1 = useMemo(() => {
    Books.Books.forEach((element) => {
      if (element.Genre == "Mystery") {
        BookCategory.Mystery.push(element);
      } else if (element.Genre == "Adventure") {
        BookCategory.Adventure.push(element);
      }
    });
  }, [Books]);

  fun1;

  return (
    <>
      <Frame>
        <div className="w-[100%]">
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="flex md:justify-between justify-center items-center px-8 font-DancingScript gap-2 w-[100%]">
              <div className="">
                <p className="w-[120px] text-[2rem] font-bold">Adventure</p>
              </div>
              <div className="w-[100%] hidden md:block">
                <hr className="border-1 border-black" />
              </div>
              <div>
                <img src={img2} alt="" className="h-[80px] w-[100px]" />
              </div>
            </div>
            <div className="shadow-md flex-wrap my-2 w-[100%] shadow-slate-300 rounded-[10px] flex gap-2 gap-y-5 justify-around overflow-hidden items-center py-4 px-4 mx-2">
              {BookCategory.Adventure.map((ele, index) => (
                <BookCard book={ele} key={index} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex md:justify-between justify-center items-center px-8 font-DancingScript gap-2 w-[100%]">
              <div>
                <img src={img3} alt="" className="h-[80px] w-[100px]" />
              </div>

              <div className="w-[100%] hidden md:block ">
                <hr className="border-1 border-black" />
              </div>
              <div className="">
                <p className="w-[130px] text-[2rem] font-bold">Mystery</p>
              </div>
            </div>
            <div className="flex-wrap shadow-md my-2 w-[100%] shadow-slate-300 rounded-[10px] flex gap-2 justify-around overflow-hidden items-center py-4 px-4 mx-2">
              {BookCategory.Mystery.map((ele, index) => (
                <BookCard book={ele} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Frame>
    </>
  );
}
