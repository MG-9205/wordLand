import React from "react";
import img2 from "../assets/images/bookReading1.png";
import img11 from "../assets/images/bookImage1.jpg";
import Frame from "../components/Frame";

const BookCard = ({ book }) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center lg:gap-2 gap-y-4 ">
        <div className="lg:h-[100px] lg:w-[90px] h-[150px] w-[120px] flex justify-center items-center ">
          <img
            src={book.imageUrl}
            alt=""
            className="lg:h-[100px] lg:w-[70px] h-[150px] w-[120px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 font-Montserrat justify-center items-center">
          <span className="font-bold text-[1rem] font-DancingScript text-center w-[90px]">
            {book.bookName}
          </span>
          <span className="font-semibold text-[0.8rem] text-primary hover:text-red-800 cursor-pointer">
            Read now!
          </span>
        </div>
      </div>
    </>
  );
};

export default function Explore() {
  const books = [
    {
      bookName: "To Kill a Mockingbird",
      authorName: "Harper Lee",
      imageUrl: img11,
      shortDescription:
        "A novel about the serious issues of rape and racial inequality.",
      pdfLink:
        "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
      noOfStars: 5,
      genre: "Fiction",
    },
    {
      bookName: "To Kill a Mockingbird",
      authorName: "George Orwell",
      imageUrl: img11,
      shortDescription:
        "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
      pdfLink:
        "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
      noOfStars: 4,
      genre: "Dystopian",
    },
    {
      bookName: "The Great Gatsby",
      authorName: "F. Scott Fitzgerald",
      imageUrl: img11,
      shortDescription:
        "A novel about the American dream and the roaring twenties.",
      pdfLink:
        "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
      noOfStars: 4,
      genre: "Fiction",
    },
    {
      bookName: "Pride and Prejudice",
      authorName: "Jane Austen",
      imageUrl: img11,
      shortDescription:
        "A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet.",
      pdfLink:
        "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
      noOfStars: 4,
      genre: "Romance",
    },
    {
      bookName: "To Kill a Mockingbird",
      authorName: "Harper Lee",
      imageUrl: img11,
      shortDescription:
        "A novel about the serious issues of rape and racial inequality.",
      pdfLink:
        "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
      noOfStars: 5,
      genre: "Fiction",
    },
    {
      bookName: "To Kill a Mockingbird",
      authorName: "George Orwell",
      imageUrl: img11,
      shortDescription:
        "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
      pdfLink:
        "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
      noOfStars: 4,
      genre: "Dystopian",
    },
    {
      bookName: "The Great Gatsby",
      authorName: "F. Scott Fitzgerald",
      imageUrl: img11,
      shortDescription:
        "A novel about the American dream and the roaring twenties.",
      pdfLink:
        "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
      noOfStars: 4,
      genre: "Fiction",
    },
    {
      bookName: "Pride and Prejudice",
      authorName: "Jane Austen",
      imageUrl: img11,
      shortDescription:
        "A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet.",
      pdfLink:
        "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
      noOfStars: 4,
      genre: "Romance",
    },
  ];
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
            <div className="shadow-md flex-wrap my-2 w-[100%] shadow-slate-300 rounded-[10px] flex gap-2 justify-around overflow-hidden items-center py-4 px-4 mx-2">
              {books.map((ele, index) => (
                <BookCard book={ele} key={index} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex md:justify-between justify-center items-center px-8 font-DancingScript gap-2 w-[100%]">
              <div>
                <img src={img2} alt="" className="h-[80px] w-[100px]" />
              </div>

              <div className="w-[100%] hidden md:block ">
                <hr className="border-1 border-black" />
              </div>
              <div className="">
                <p className="w-[130px] text-[2rem] font-bold">Mystery</p>
              </div>
            </div>
            <div className="flex-wrap shadow-md my-2 w-[100%] shadow-slate-300 rounded-[10px] flex gap-2 justify-around overflow-hidden items-center py-4 px-4 mx-2">
              {books.map((ele, index) => (
                <BookCard book={ele} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Frame>
    </>
  );
}
