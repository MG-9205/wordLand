import { NavLink } from "react-router-dom";
import img1 from "../assets/images/home2.webp";
import img2 from "../assets/images/bookReading1.png";
import img3 from "../assets/images/AuthorWord1.png";
import img4 from "../assets/images/maya.jpeg";
import img7 from "../assets/images/JaneAusten.webp";
import img8 from "../assets/images/GeorgeOrwell.jpg";
import img9 from "../assets/images/marktwain.jpg";
import img10 from "../assets/images/ShakespeareWilliam.webp";
import img5 from "../assets/images/authorWord.png";
import img6 from "../assets/images/blogging.png";
import img11 from '../assets/images/bookImage1.jpg'
import Card1 from "../components/Card1";
import { useEffect, useState } from "react";

function AuthorSection() {
  const [AuthorData, setAuthorData] = useState({
    AuthorName: "William Shakespeare",
    AuthorFamousQuote:
      "There is nothing either good or bad, but thinking makes it so.",
    AuthorImageUrl: img10,
  });

  const authors = [
    {
      AuthorName: "William Shakespeare",
      AuthorFamousQuote:
        "There is nothing either good or bad, but thinking makes it so.",
      AuthorImageUrl: img10,
    },
    {
      AuthorName: "Jane Austen",
      AuthorFamousQuote:
        "It isn’t what we say or think that defines us, but what we do.",
      AuthorImageUrl: img7,
    },
    {
      AuthorName: "Mark Twain",
      AuthorFamousQuote:
        "The best way to cheer yourself is to try to cheer someone else up.",
      AuthorImageUrl: img9,
    },
    {
      AuthorName: "George Orwell",
      AuthorFamousQuote:
        "In a time of deceit telling the truth is a revolutionary act.",
      AuthorImageUrl: img8,
    },
    {
      AuthorName: "Maya Angelou",
      AuthorFamousQuote:
        "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through.",
      AuthorImageUrl: img4,
    },
  ];

  useEffect(() => {
    let count = 1;
    const Interval = setInterval(() => {
      if (count != authors.length + 1) {
        setAuthorData(authors[count - 1]);
        count++;
      } else {
        count = 1;
        setAuthorData(authors[count - 1]);
      }
    }, 10000);
    return () => clearInterval(Interval);
  }, []);

  return (
    <>
      <div className="flex justify-around items-center flex-col-reverse lg:flex-row  overflow-hidden md:py-12 py-5 relative ">
        <div className="flex flex-col justify-center items-center pt-8">
          <div className="flex justify-center items-center">
            <p className="text-center md:w-[500px] w-[90%] md:text-[1.7rem] text-[1.3rem] font-Montserrat font-semibold transition-all duration-500 ">
              {AuthorData.AuthorFamousQuote}
            </p>
          </div>
          <div className="w-[100%] md:text-right text-center pt-4 text-[1.8rem] font-bold font-DancingScript text-primary">
            by:- {AuthorData.AuthorName}
          </div>
        </div>
        <div className="px-1 md:px-0">
          <div className="bg-primary w-[450px] h-[450px] absolute z-[-1] right-0 top-[-40px] hidden lg:block"></div>
          <div className=" border-[10px] shadow-xl  shadow-slate-400 h-[300px] md:w-[430px]  ">
            <img
              src={AuthorData.AuthorImageUrl}
              alt=""
              className="h-[280px] md:w-[430px] object-cover  transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {

  const books = [
    {
        bookName: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        imageUrl:img11,
        shortDescription: "A novel about the serious issues of rape and racial inequality.",
        pdfLink: "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
        noOfStars: 5,
        genre: "Fiction"
    },
    {
        bookName: "To Kill a Mockingbird",
        authorName: "George Orwell",
        imageUrl: img11,
        shortDescription: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        pdfLink: "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
        noOfStars: 4,
        genre: "Dystopian"
    },
    {
        bookName: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        imageUrl: img11,
        shortDescription: "A novel about the American dream and the roaring twenties.",
        pdfLink: "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
        noOfStars: 4,
        genre: "Fiction"
    },
    {
        bookName: "Pride and Prejudice",
        authorName: "Jane Austen",
        imageUrl: img11,
        shortDescription: "A romantic novel that charts the emotional development of the protagonist Elizabeth Bennet.",
        pdfLink: "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
        noOfStars: 4,
        genre: "Romance"
    },
    {
        bookName: "The Catcher in the Rye",
        authorName: "J.D. Salinger",
        imageUrl: img11,
        shortDescription: "A story about adolescent alienation and loss of innocence in the protagonist Holden Caulfield.",
        pdfLink: "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/The_Jungle_Book.pdf?alt=media&token=c1f7f076-7e0b-435d-b8c9-d4a5cd74197f",
        noOfStars: 3,
        genre: "Fiction"
    }
];

  return (
    <>
      <div
        className=" overflow-x-hidden h-[100vh] bg-fixed bg-center flex flex-col justify-center items-center  font-Montserrat"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="flex flex-col md:text-[4rem] text-[2rem] font-bold">
          <span>Your Imagination</span>
          <span>Your Books</span>
          <span>
            Your<span className="text-primary"> WordLand</span>
          </span>
        </div>
        <div className="md:w-[700px] text-[1.2rem] w-[90%] font-medium text-center">
          Customize your learning journey at Wordland align your courses with
          curated books. It's your academic adventure, uniquely defined. Welcome
          to Your Wordland.
        </div>
        <div className="flex gap-5 pt-6">
          <button className="bg-primary text-white w-[150px] h-[40px] rounded-[25px] transition-all duration-500 hover:translate-y-[-0.25rem]">
            <NavLink>Explore!</NavLink>
          </button>
          <button className=" text-primary font-semibold w-[150px] h-[40px] rounded-[25px] border-primary border-2  transition-all duration-500 hover:translate-y-[-0.25rem] ">
            <NavLink>Contact us</NavLink>
          </button>
        </div>
      </div>
      {/* Famous Book section */}
      <div className="pt-8 overflow-x-hidden">
        <div className="flex justify-between items-center px-8 font-DancingScript gap-2">
          <div className="">
            <p className="w-[200px] text-[2.3rem] font-bold">Top interesting</p>
          </div>
          <div className="w-[100%] hidden md:block">
            <hr className="border-1 border-black" />
          </div>
          <div>
            <img src={img2} alt="" className="h-[100px] w-[120px]" />
          </div>
        </div>
        <div className="flex justify-center items-center pt-6 md:pt-2">
          <p className="w-[700px] text-center font-Montserrat text-[1rem] font-semibold">
            Welcome to Wordland, your ultimate literary destination. Explore our
            curated collection of classics, bestsellers, and hidden gems. Every
            book promises a new adventure, fresh perspective, and a journey
            beyond the ordinary
          </p>
        </div>
        <div className="flex justify-around items-center flex-wrap gap-y-4 md:gap-4 lg:w-[1000px] m-auto py-10 ">
         {
          books.map((ele,index)=>(
            <Card1 book={ele} key={index} />
          ))
         }
        </div>
      </div>
      {/* Author section */}
      <div className="pt-8 overflow-x-hidden">
        <div className="flex justify-between items-center px-8 font-DancingScript gap-2">
          <div>
            <img src={img3} alt="" className="h-[100px] w-[120px]" />
          </div>
          <div className="w-[100%] hidden md:block">
            <hr className="border-1 border-black" />
          </div>
          <div className="">
            <p className="w-[200px] text-[2.1rem] font-bold">Author's Words</p>
          </div>
        </div>
        <div className="flex justify-center items-center pt-6 md:pt-2">
          <p className="w-[700px] text-center font-Montserrat text-[1rem] px-1 md:px-0 font-semibold">
            "Books are a uniquely portable magic." – Stephen King. Welcome to
            WordLand, where every story is crafted to captivate your imagination
            and inspire your heart. Dive in and enjoy the journey!
          </p>
        </div>
        <div className="py-7">
          <AuthorSection />
        </div>
      </div>
      {/* Blogging section */}
      <div className="lg:py-14 py-8 overflow-x-hidden font-Montserrat">
        <div className="flex md:justify-between justify-center items-center px-8 font-DancingScript gap-2">
          <div className="">
            <p className="lg:w-[120px] text-[2.3rem] font-bold">Blogging</p>
          </div>
          <div className="w-[100%] hidden md:block">
            <hr className="border-1 border-black" />
          </div>
          <div>
            <img src={img5} alt="" className="h-[100px] w-[120px]" />
          </div>
        </div>
        <div className="flex justify-center items-center pt-6 md:pt-2">
          <p className="w-[700px] text-center font-Montserrat text-[1rem] px-1 md:px-0 font-semibold">
            Welcome to Wordland's blogging section, where readers share their
            thoughts on any book. Dive into diverse perspectives, discover new
            reads, and join our vibrant community of book enthusiasts. Your
            literary journey starts here!
          </p>
        </div>
        <div className="flex justify-center items-center flex-col lg:flex-row nd:pt-4 pt-2 pb-10 md:pb-0">
          <div className="md:h-[400px] md:w-[600px] flex justify-center items-center">
            <img
              src={img6}
              alt=""
              className="md:h-[400px] md:w-[600px] md:object-cover object-contain"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex justify-center items-center">
              <p className="lg:w-[600px] w-[90%] text-center md:text-[1.5rem] text-[1.2rem]">
                Explore Wordland's blogging section to share your thoughts, read
                reviews, and connect with fellow book lovers. Dive in today!
              </p>
            </div>
            <div>
              <button className="bg-primary text-white  w-[150px] h-[40px] rounded-[25px] transition-all duration-500 hover:translate-y-[-0.25rem]">
                <NavLink>Start now!!</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
