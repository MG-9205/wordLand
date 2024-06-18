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
      "Genre": "Mystery",
      "Book_name": "Looking for Trouble",
      "Star": 4,
      "Author_name": "Cath Staincliffe",
      "ImageUrl": "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/mystry%2FLooking%20for%20Trouble.jpg?alt=media&token=71911656-7e28-4063-a471-587611ce3a34",
      "Description": "She’s a single parent. A private eye. And liking it. Until, that is, Mrs Hobbs turns up asking Sal Kilkenny to find her missing son. Sal’s search takes her through the Manchester underworld, a world of deprivation, of well-heeled organized crime and, ultimately, murder.",
      "PDFUrl": "https://drive.google.com/file/d/10046TvW7m-LT-2kOl2SkQpFDtHJ3Gbbv/preview"
    },
    {
      "Genre": "Mystery",
      "Book_name": "The Taint of Midas",
      "Star": 5,
      "Author_name": "Anne Zouroudi",
      "ImageUrl": "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/mystry%2FThe%20Taint%20of%20Midas.jpg?alt=media&token=6d7631bb-c6b2-4fa7-a069-3fa2f98441df",
      "Description": "Gabrilis Kaloyeros is a bee-keeper on the beautiful Greek island of Arcadia. The ruined Temple of Apollo has been in his care for decades, and he has worked to protect it. But when crooked developers take over the island and the value of the land soars, he is persuaded through unscrupulous means to sign away his interest.",
      "PDFUrl": "https://drive.google.com/file/d/1ETqes8rugWVs4HS-XmvpxUDJa9lcG188/preview"
    },
    {
      "Genre": "Mystery",
      "Book_name": "Bloody Secrets",
      "Star": 3,
      "Author_name": "Carolina Garcia",
      "ImageUrl": "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/mystry%2FBloody%20Secrets.jpg?alt=media&token=2564a1dc-26ad-4d88-bc95-7aea04b275a9",
      "Description": "Miami private detective Lupe Solano comes to the aid of a young refugee from Havana, who claims that Miami’s most prominent couple has robbed his family and has arranged for his own murder.",
      "PDFUrl": "https://drive.google.com/file/d/1011rd7MQvmpjiCkCarnUjBbLTQgK4FrU/preview"
    },
    {
      "Genre": "Mystery",
      "Book_name": "The Dinner Guests",
      "Star": 4,
      "Author_name": "Kiersten Modglin",
      "ImageUrl": "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/mystry%2FThe%20Dinner%20Guests.jpg?alt=media&token=f85b068a-e6f1-478f-b57a-eb39893e638b",
      "Description": "Six friends. A lifetime of secrets. One terrifying game. When a group of friends receives unexpected invitations to a dinner party, they see it as a chance to finally meet the bizarre and reclusive new neighbor whose home is enshrouded in layers of security.",
      "PDFUrl": "https://drive.google.com/file/d/10akKNrmH8lHbA7YrrYijyAoqGFP0Du2T/preview"
    },
    {
      "Genre": "Mystery",
      "Book_name": "Death of a Writer",
      "Star": 5,
      "Author_name": "Michael Collins",
      "ImageUrl": "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/mystry%2FDeath%20of%20a%20Writer.jpg?alt=media&token=e81494bd-feb1-4f01-9bb2-d4f6b546d65c",
      "Description": "For Robert Pendleton, a professor clinging to tenure and living in the shambles of his once-bright literary career, death seems to be the only remaining option. But his suicide attempt fails, halted at the last moment by the intervention of Adi Wiltshire, a graduate student battling her own demons of failure and thwarted ambition.",
      "PDFUrl": "https://drive.google.com/file/d/1Hve9w7daF_RmBD8tGpPpJ7TAIsP7BErp/preview"
    },
    {
      "Genre": "Mystery",
      "Book_name": "Go Not : Gently",
      "Star": 3,
      "Author_name": "Cath Staincliffe",
      "ImageUrl": "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/mystry%2FGo%20Not%20Gently.jpg?alt=media&token=9c84356d-623e-4bdf-9f20-07c43263fbfb",
      "Description": "Juggling the school run with private investigating, Sal Kilkenny’s life is a strange mix of the dramatic with the domestic. Sal has two new Jimmy Achebe wants her to confirm his suspicions of his wife’s infidelity and Agnes Donlan fears for her friend Lily.",
      "PDFUrl": "https://drive.google.com/file/d/1HXKNNI0hCYcYrDer2Ay4QGP4oDh6yXil/preview"
    },
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
            <NavLink to='Explore'>Explore!</NavLink>
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
        <div className="flex justify-around items-center flex-wrap gap-y-4  gap-x-3 md:gap-4 lg:w-[1000px] m-auto py-10 ">
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
