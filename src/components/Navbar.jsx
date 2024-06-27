import { memo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search, User, X, AlignJustify } from "lucide-react";
import logo from "../assets/images/Logo.png";
import { searchState } from "../../store/BookAtom";
import { useSetRecoilState, useRecoilState } from "recoil";
import { userState } from "../../store/UserAtom";
import { toast } from "react-toastify";
const SearchBox = memo(() => {
  const setSearch = useSetRecoilState(searchState);
  const [searchValue, setSearchValue] = useState("");
  const Navigate = useNavigate();

  const handleSearch = () => {
    setSearch({
      action: "Search",
      Word: searchValue,
    });
    Navigate("/Search");
  };

  return (
    <div className="flex justify-between bg-slate-400 py-2 px-3 rounded-[50px]">
      <input
        type="text"
        name="SearchBox"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="bg-slate-200 px-3 text-[1rem] rounded-[20px] h-[30px] w-[130px] border-none outline-none"
      />
      <div className="flex justify-center items-center pl-2 text-white">
        <Search onClick={handleSearch} />
      </div>
    </div>
  );
});

const LoginButton = memo(({ visibility, setShow }) => {
  const [UserState, SetUser] = useRecoilState(userState);
  const Navigate = useNavigate();
  const handleLoginButton = (e) => {
    e.preventDefault();
    if (UserState == "Login") {
      Navigate("/Login");
    } else {
      setShow((perv) => !perv);
    }
  };

  return (
    <div
      className={`${visibility} flex justify-center items-center gap-1 bg-slate-400 py-2 px-2 rounded-[25px] w-[100%]`}
    >
      <button
        className="bg-black rounded-[25px] px-5 h-[30px] text-white text-[1rem] cursor-pointer"
        onClick={(e) => handleLoginButton(e)}
      >
        {UserState}
      </button>
      <div className="rounded-full bg-black w-[30px] h-[30px] flex justify-center items-center">
        <User className="text-white" />
      </div>
    </div>
  );
});

const Logout = ({ show, setShow }) => {
  const [UserState, SetUser] = useRecoilState(userState);
  const handleLogout = (e) => {
    e.preventDefault();
    SetUser("Login");
    localStorage.clear();
    setShow((perv) => !perv);
    toast.success("Logout successfully ", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50 font-Montserrat top-[50vh]">
      <div className="bg-primary relative p-6 rounded-lg shadow-lg w-[90%]  max-w-[530px] flex flex-col   justify-center items-center gap-4">
        <div className="text-[1.5rem] font-semibold">You want Logout!!</div>
        <div className="flex gap-4">
          <button
            className="bg-black rounded-[10px] py-3 px-4 text-white"
            onClick={(e) => handleLogout(e)}
          >
            Logout
          </button>
          <button
            className="bg-white rounded-[10px] py-3 px-4 font-bold"
            onClick={() => setShow((perv) => !perv)}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

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
  const Navigate = useNavigate();
  const setSearch = useSetRecoilState(searchState);
  const [state, setState] = useState({
    isGenreOpen: false,
    isMenuOpen: false,
  });
  const [show, setShow] = useState(false);

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

  const handleGenreSearch = (genre) => {
    setState((prevState) => ({
      ...prevState,
      isGenreOpen: !prevState.isGenreOpen,
    }));
    setSearch({
      action: "Genre",
      Word: genre,
    });
    Navigate("/Search");
  };

  const handleNavbar = () => {
    setState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  return (
    <header className=" z-50 flex justify-between h-[70px] fixed  bg-black bg-opacity-50 md:backdrop-blur-sm backdrop-blur-0 w-full font-Montserrat md:px-8 px-4">
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
                      onClick={() => handleGenreSearch(genre)}
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px]">
              <NavLink to="/Library">Library</NavLink>
            </li>
            <li className="hover:bg-slate-400 px-5 py-2 rounded-[25px]">
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <SearchBox />
        <LoginButton
          visibility="hidden lg:flex"
          show={show}
          setShow={setShow}
        />
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
            <NavLink to="/" onClick={handleNavbar}>
              Home
            </NavLink>
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
                    onClick={() => handleGenreSearch(genre)}
                  >
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/Library" onClick={handleNavbar}>
              Library
            </NavLink>
          </li>
          <li>
            <NavLink to="/feedback" onClick={handleNavbar}>
              Feedback
            </NavLink>
          </li>
        </ul>
        <LoginButton show={show} setShow={setShow} />
      </div>
      <Logout show={show} setShow={setShow} />
    </header>
  );
};

export default memo(Navbar);
