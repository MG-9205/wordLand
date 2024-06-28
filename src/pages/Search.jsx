import  { useMemo } from "react";
import Frame from "../components/Frame";
import onBook from "../assets/images/noBook.png"
import {
  searchState,
  bookDataSelector,
  ShowDetailCard,
  currentBookState,
} from "../../store/BookAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";

const BookCard = ({ book }) => {
  const setDetailCard = useSetRecoilState(ShowDetailCard);
  const setCurrentBook = useSetRecoilState(currentBookState);

  const handleReadNowClick = () => {
    setCurrentBook(book);
    setDetailCard(true);
  };

  return (
    <div className="flex flex-col justify-center items-center lg:gap-2 gap-y-4">
      <div className="lg:h-[130px] lg:w-[80px] h-[160px] w-[120px] flex justify-center items-center">
        <img
          src={book.ImageUrl}
          alt=""
          className="lg:h-[130px] lg:w-[80px] h-[160px] w-[120px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-1 font-Montserrat justify-center items-center">
        <span className="flex gap-1">
          {Array.from({ length: book.Star }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="yellow"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </span>
        <span className="font-bold text-[1rem] font-DancingScript text-center w-[90px]">
          {book.Book_name}
        </span>
        <span className="font- text-[0.8rem] text-center w-[110px]">
          {book.Author_name}
        </span>
        <span
          className="font-semibold text-[0.8rem] text-primary hover:text-red-800 cursor-pointer"
          onClick={handleReadNowClick}
        >
          Know More!
        </span>
      </div>
    </div>
  );
};

export default function Search() {
  const searchState1 = useRecoilValue(searchState);
  const Books = useRecoilValue(bookDataSelector);

  const myBook = useMemo(() => {
    if(Books.Books){
    if (searchState1.action === "Genre") {
      return Books.Books.filter((book) => book.Genre === searchState1.Word);
    }

    if (searchState1.action === "Search") {
      const word = searchState1.Word.toLowerCase();
      return Books.Books.filter(
        (book) =>
          book.Book_name.toLowerCase().includes(word) ||
          book.Genre.toLowerCase().includes(word) ||
          book.Author_name.toLowerCase().includes(word)
      );
    }}
    return [];
  }, [searchState1, Books]);

  const handleLoad = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Frame>
        <div className="flex flex-col gap-6 overflow-auto" onLoad={handleLoad}>
          <div className="font-DancingScript text-primary md:text-[3rem] text-[2rem] font-bold px-4">
            {searchState1.Word}
          </div>
          <div className="flex flex-wrap gap-x-12 lg:gap-x-4 gap-y-4 justify-center items-center lg:justify-start">
            {myBook.map((book, key) => (
              <BookCard book={book} key={key} />
            ))}
          </div>
          {
            myBook.length===0 && <div className="flex justify-center items-center"> <img src={onBook} alt="" className="h-[300px] w-[300px]" /> </div>
          }
        </div>
      </Frame>
    </>
  );
}
