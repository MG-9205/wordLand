import { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, User, X, AlignJustify } from "lucide-react";
import logo from "../assets/images/Logo.png";

const SearchBox = memo(() => (
  <div className="flex justify-between bg-slate-400 py-2 px-3 rounded-[50px]">
    <input
      type="text"
      name="SearchBox"
      placeholder="Search"
      className="bg-slate-200 px-3 text-[1rem] rounded-[20px] h-[30px] w-[130px] border-none outline-none"
    />
    <div className="flex justify-center items-center pl-2 text-white">
      <Search />
    </div>
  </div>
));

const LoginButton = memo(({ visibility }) => (
  <div
    className={`${visibility} flex justify-center items-center gap-1 bg-slate-400 py-2 px-2 rounded-[25px] w-[140px]`}
  >
    <button className="bg-black rounded-[25px] px-5 h-[30px] text-white text-[1rem]">
      <Link to="/Login">Login</Link>
    </button>
    <div className="rounded-full bg-black w-[30px] h-[30px] flex justify-center items-center">
      <User className="text-white" />
    </div>
  </div>
));

const GenreList = [
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Thriller",
  "Biography",
  "Science",
  "Literary",
  "Historical",
  "Adventure",
  "Action",
  "Magical",
];

const Navbar = () => {
  const [state, setState] = useState({
    isGenreOpen: false,
    isMenuOpen: false,
  });

  const toggleGenreList = () => {
    setState((prevState) => ({
      ...prevState,
      isGenreOpen: !prevState.isGenreOpen,
    }));
  };

  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  return (
    <header className=" z-50 flex justify-between h-[70px] fixed  bg-black bg-opacity-50 backdrop-blur-sm w-full font-Montserrat md:px-8 px-4">
      <div className="flex items-center gap-6">
        <img src={logo} alt="Logo" />
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-1 text-white text-[1.2rem]">
            <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px] relative">
              <span onClick={toggleGenreList} className="cursor-pointer">
                Genre
              </span>
              <div
                className={`${
                  state.isGenreOpen ? "block" : "hidden"
                } bg-slate-400 absolute py-4 px-4 top-[57px]`}
              >
                <ul className="flex flex-wrap gap-3 w-[250px] text-[0.9rem]">
                  {GenreList.map((genre, index) => (
                    <li
                      key={`genreid${index}`}
                      className="w-[70px] text-white hover:text-red-600"
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px]">
              <NavLink to="/profile">Blogs</NavLink>
            </li>
            <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px]">
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <SearchBox />
        <LoginButton visibility="hidden lg:flex" />
        <div className="text-white flex gap-2 lg:hidden">
          <X
            onClick={toggleMenu}
            className={`${state.isMenuOpen ? "block" : "hidden"}`}
          />
          <AlignJustify
            onClick={toggleMenu}
            className={`${state.isMenuOpen ? "hidden" : "block"}`}
          />
        </div>
      </div>
      <div
        className={`absolute right-0 top-[70px] flex flex-col bg-black  h-[100vh] px-6 py-4 md:w-[50vw] lg:w-[30vw] transition-transform duration-500 ${
          state.isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-2 text-[1.1rem] text-white pb-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <span onClick={toggleGenreList} className="cursor-pointer">
              Genre
            </span>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                state.isGenreOpen ? "h-auto" : "h-0"
              }`}
            >
              <ul className="flex flex-col gap-3 w-[250px] text-[0.9rem] px-5 py-4">
                {GenreList.map((genre, index) => (
                  <li
                    key={`genreid${index}`}
                    className="w-[70px] text-white hover:text-red-600"
                  >
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/profile">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/feedback">Feedback</NavLink>
          </li>
        </ul>
        <LoginButton />
      </div>
    </header>
  );
};

export default memo(Navbar);
