import { TopBookData } from "../../store/BookAtom";
import { useRecoilValue } from "recoil";
import DetailCard from "./DetailCard";
import { useSetRecoilState } from "recoil";
import { currentBookState, ShowDetailCard } from "../../store/BookAtom";

const BookCard2 = ({ book }) => {
  const setCurrentBook = useSetRecoilState(currentBookState);
  const setdetailCard = useSetRecoilState(ShowDetailCard);

  const handleReadNowClick = () => {
    setCurrentBook(book);
    setdetailCard(true);
  };

  return (
    <>
      <div className="flex gap-5">
        <div className="h-[120px] min-w-[80px] flex justify-center items-center">
          <img
            src={book.ImageUrl}
            alt=""
            className="h-[120px] w-[80px] object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[1rem] font-semibold gap-2">
            {book.Book_name}
          </span>
          <span className="text-primary font-DancingScript text-[1rem] font-semibold">
            by: {book.Author_name}{" "}
          </span>
          <span>Genre: {book.genre}</span>
          <span> Rating: {book.Star}/5</span>
          <span
            className="text-primary cursor-pointer"
            onClick={handleReadNowClick}
          >
            Know More!!
          </span>
        </div>
      </div>
    </>
  );
};

export default function Frame({ children }) {
  const topBooks = useRecoilValue(TopBookData);

  const Books = topBooks.slice(0, 4);
  const handleLoad = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="pt-[80px] px-2 pb-2 overflow-x-hidden"
        onLoad={handleLoad}
      >
        <div className="lg:grid flex flex-col lg:grid-cols-12 grid-col-1 lg:grid-rows-12 grid-rows-3 gap-4 w-[100%]">
          <div className=" lg:grid-rows-12  lg:col-span-9 lg:row-span-12 row-span-2    flex flex-col gap-2 overflow-hidden lg:max-h-[100vh]">
            {children}
          </div>
          <div className=" flex flex-col pl-4 pb-5 gap-4 lg:col-span-3 lg:row-span-12 lg:col-start-10 row-span-1 shadow-sm  shadow-slate-200 rounded-[10px] overflow-hidden ">
            <div className="text-primary text-[1.6rem] font-semibold font-DancingScript pt-2 text-left w-[90%]">
              Quick Library
            </div>
            <div className="flex flex-col lg:justify-between    gap-6 pt-6">
              {Books.map((ele, index) => (
                <BookCard2 book={ele} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <DetailCard />
    </>
  );
}
