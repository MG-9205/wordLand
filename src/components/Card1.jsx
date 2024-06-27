
import DetailCard from "./DetailCard";
import { currentBookState } from "../../store/BookAtom";
import { useSetRecoilState, useRecoilState } from "recoil";
import { ShowDetailCard } from "../../store/BookAtom";

export default function Card1({ book }) {
  const setCurrentBook = useSetRecoilState(currentBookState);
  const [DetailCardvalue, setdetailCard] = useRecoilState(ShowDetailCard);

  const handleReadNowClick = () => {
    setCurrentBook(book);
    setdetailCard(true);
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-2 ">
        <div className="h-[160px] w-[120px] ">
          <img
            src={book.ImageUrl}
            alt=""
            className="h-[160px] w-[120px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 font-Montserrat justify-around items-center min-h-[140px]">
          <span className="flex gap-1">
            {Array.from({ length: book.Star }).map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
          <span className="font-bold text-[1.2rem] font-DancingScript text-center w-[110px]">
            {book.Book_name}
          </span>
          <span className="font- text-[0.8rem] text-center w-[110px]">
            {book.Author_name}
          </span>
          <span
            className="font-semibold text-primary hover:text-red-800 cursor-pointer"
            onClick={handleReadNowClick}
          >
            Read now!
          </span>
        </div>
      </div>
      <DetailCard />
    </>
  );
}
