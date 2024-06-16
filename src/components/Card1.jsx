import {useState} from 'react'
import DetailCard from './DetailCard'


export default function Card1({book}) {
  const [showModal, setShowModal] = useState(false);

  const handleReadNowClick = () => {
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setShowModal(false);
  };

  return (
    <>
    <div className=" flex flex-col justify-center items-center gap-2 ">
          <div className="h-[210px] w-[150px] ">
            <img src={book.imageUrl} alt="" className="h-[210px] w-[150px] object-cover" />
          </div>
          <div className="flex flex-col gap-1 font-Montserrat justify-center items-center">
            <span className="flex gap-1">
            {Array.from({ length: book.noOfStars }).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
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
            <span className="font-bold text-[1.6rem] font-DancingScript text-center w-[150px]">{book.bookName}</span>
            <span className="font- text-[1rem] text-center w-[150px]">{book.authorName}</span>
            <span
                        className="font-semibold text-primary hover:text-red-800 cursor-pointer"
                        onClick={handleReadNowClick}
                    >
               Read now!
            </span>
          </div>
        </div>
        <DetailCard show={showModal} onClose={handleCloseModal} book={book} />
    </>
  )
}
