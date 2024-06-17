import React from "react";
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

export default function ReadingSection() {
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
        <div className="grid lg:grid-cols-12 grid-col-1 lg:grid-rows-12 grid-rows-2 gap-4 w-[100%] h-full">
          <div className=" lg:grid-rows-12  lg:col-span-9 lg:row-span-12   flex flex-col gap-2 overflow-hidden">
            <div className="flex md:justify-between justify-center md:gap-0 gap-5 md:items-center md:flex-row flex-col font-Montserrat  h-fit md:px-4   shadow-sm  shadow-slate-200 rounded-[10px]">
              <div className="flex gap-5">
                <div className="h-[140px] min-w-[100px] flex justify-center items-center">
                  <img
                    src={img11}
                    alt=""
                    className="h-[140px] w-[100px] object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[1.5rem] font-bold gap-2">
                    The Great Gatsby
                  </span>
                  <span className="text-primary font-DancingScript text-[1.2rem] font-semibold">
                    by: F. Scott Fitzgerald{" "}
                  </span>
                  <span className="pt-2">Genre: Fiction</span>
                  <span> Rating: 4/5</span>
                </div>
              </div>
              <div className="flex flex-col border-l-2 border-primary pl-5 md:mb-0 mb-6 pr-2">
                <div className="text-primary font-semibold">
                  Short Description
                </div>
                <div>
                  <p className="w-[400px]">
                    A dystopian social science fiction novel and cautionary tale
                    about the dangers of totalitarianism.
                  </p>
                </div>
              </div>
            </div>

            <div className="  shadow-sm  shadow-slate-200 rounded-[10px] lg:h-full h-fit">
              <iframe
                src="https://drive.google.com/file/d/1yCHQn5ZvnEpJ5cpIuinuOfR9ovJHWveE/preview"
                frameborder="0"
                className="w-[100%] lg:h-[100%] h-[500px] rounded-[10px] "
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col pl-4  gap-4 lg:col-span-3 lg:row-span-12 lg:col-start-10 row-span-1 shadow-sm  shadow-slate-200 rounded-[10px] ">
            <div className="text-primary text-[1.6rem] font-semibold font-DancingScript pt-2 text-left w-[90%]">
              Quick Library
            </div>
            <div className="flex flex-col lg:justify-between  h-[100%] pb-9 gap-6 pt-6">
              {books.map((ele, index) => (
                <BookCard2 book={ele} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
