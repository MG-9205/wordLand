import { NavLink } from "react-router-dom";
import img1 from "../assets/images/home2.webp";
import img2 from "../assets/images/bookReading1.png";

export default function Home() {
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
      <div>
        <div className="flex justify-between items-center px-8 font-DancingScript gap-2">
          <div className="">
            <p className="w-[200px] text-[2.3rem] font-bold">Top interesting</p>
          </div>
          <div className="w-[100%]">
            <hr className="border-1 border-black" />
          </div>
          <div>
            <img src={img2} alt="" className="h-[100px] w-[120px]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="w-[700px] text-center font-Montserrat text-[1rem] font-semibold">
            Welcome to Wordland, your ultimate literary destination. Explore our
            curated collection of classics, bestsellers, and hidden gems. Every
            book promises a new adventure, fresh perspective, and a journey
            beyond the ordinary
          </p>
        </div>
      </div>
    </>
  );
}
