import { memo, useState } from "react";
import logo from "../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { Search, User } from "lucide-react";

const SearchBox=memo(()=>{
  return(
    <>
    <div className="flex justify-between bg-slate-400 py-2 px-3 rounded-[50px]">
            <div>
              <input type="text" name="SearchBox" id="" placeholder="Search" className="bg-slate-200 px-3 text-[1rem] rounded-[20px] h-[30px] w-[130px] boredr-none outline-none" />
            </div>
            <div className="flex justify-center items-center pl-2 text-white">
              <Search />
            </div>
          </div>
    </>
  )
})
const GenreList=["Fantasy","Horror","Mystery","Romance","Thiller","Biography" ,"Science","Literacy","Historical","Adventure","Action","Magical"]
const Navbar=()=> {
  const [GenreShow,SetGenreShow]=useState("hidden")
 
  return (
    <>
      <header className=" flex justify-between h-[70px] fixed top-0 bg-slate-500 w-[100%] font-Montserrat px-8">
        <div className="flex justify-center items-center gap-6  ">
          <div>
            <img src={logo} alt="" />
          </div>
          <nav className="flex ">
            <ul className="flex justify-center items-center gap-1 text-white text-[1.2rem]">
              <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px]">
                <NavLink>Home</NavLink>
              </li>
              <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px] relative">
                <span onClick={()=>{
                  GenreShow=="hidden"?SetGenreShow("block"):SetGenreShow("hidden")
                }}>Genre</span>
                <div className={`${GenreShow} bg-slate-400 absolute py-4 px-4 top-[57px]`}>
        <ul className="flex flex-wrap gap-3 w-[250px] text-[0.9rem]">
          {
            GenreList.map((ele,key)=>(
              <li key={`genreid${key}`} className="w-[70px] text-white hover:text-red-600">{ele}</li>
            ))
          }
        </ul>
      </div>
              </li>
              <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px]">
                <NavLink to='/'>Profile</NavLink>
              </li>
              <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px]">
                <NavLink>FeedBack</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center items-center gap-5">
          <SearchBox/>

          <div className="flex justify-center items-center gap-1 bg-slate-400 py-2 px-2 rounded-[25px]">
            <div>
            <button className="bg-black rounded-[25px] px-5 h-[30px] text-white text-[1rem] "><Link>Login</Link></button>
            </div>
            <div className="rounded-[50%] bg-black w-[30px] h-[30px] flex justify-center items-center">
              <User className="text-white"/>
            </div>                                
          </div>
        </div>
      </header>
      
    </>
  );
}
export default memo(Navbar)
