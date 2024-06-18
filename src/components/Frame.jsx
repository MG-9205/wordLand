import React from 'react'
import img11 from "../assets/images/bookImage1.jpg";

const BookCard2 = ({ book }) => {

    
    return (
      <>
        <div className="flex gap-5">
          <div className="h-[120px] min-w-[80px] flex justify-center items-center">
            <img
              src={book.imageUrl}
              alt=""
              className="h-[120px] w-[80px] object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[1rem] font-semibold gap-2">
              {book.bookName}
            </span>
            <span className="text-primary font-DancingScript text-[1rem] font-semibold">
              by: {book.authorName}{" "}
            </span>
            <span>Genre: {book.genre}</span>
            <span> Rating: {book.noOfStars}/5</span>
            <span className="text-primary">read now!!</span>
          </div>
        </div>
      </>
    );
  };

export default function Frame( {children}) {
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
          bookName: "The Catcher in the Rye",
          authorName: "J.D. Salinger",
          imageUrl: img11,
          shortDescription:
            "A story about adolescent alienation and loss of innocence in the protagonist Holden Caulfield.",
          pdfLink:
            "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
          noOfStars: 3,
          genre: "Fiction",
        },
      ];
  return (
   <>
   <div className="pt-[80px] px-2 pb-2 overflow-x-hidden">
        <div className="lg:grid flex flex-col lg:grid-cols-12 grid-col-1 lg:grid-rows-12 grid-rows-3 gap-4 w-[100%]">
          <div className=" lg:grid-rows-12  lg:col-span-9 lg:row-span-12 row-span-2    flex flex-col gap-2 overflow-hidden lg:max-h-[100vh]">
          {children}
          </div>
          <div className=" flex flex-col pl-4 pb-5 gap-4 lg:col-span-3 lg:row-span-12 lg:col-start-10 row-span-1 shadow-sm  shadow-slate-200 rounded-[10px] overflow-hidden ">
            <div className="text-primary text-[1.6rem] font-semibold font-DancingScript pt-2 text-left w-[90%]">
              Quick Library
            </div>
            <div className="flex flex-col lg:justify-between    gap-6 pt-6">
              {books.map((ele, index) => (
                <BookCard2 book={ele} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
