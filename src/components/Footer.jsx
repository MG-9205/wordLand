import React from "react";
import logo from "../assets/images/Logo.png";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = React.memo(() => {
  return (
    <footer className="flex justify-center items-center bg-black py-14 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-14 bg-black text-white font-Montserrat">
        <div className="flex flex-col lg:gap-4 gap-6 justify-center items-center lg:justify-start lg:items-start">
          <div>
            <img src={logo} alt="" className="h-[90px] w-[100px]" />
          </div>
          <div className="flex flex-col gap-1 justify-center items-center lg:items-start ">
            <span className="text-[1.1rem]">
              A little bit more about WordLand{" "}
            </span>
            <span className="lg:w-[600px] w-[90%] font-DancingScript text-[1.5rem] text-center lg:text-left">
              Your go-to platform for curated books aligned with academic
              courses. Explore, learn, and excel with Wordland.
            </span>
          </div>
          <div className="flex gap-6 py-4">
            <Linkedin />
            <Instagram />
            <Twitter />
          </div>
          <div>© 2023 Wordland. All rights reserved.</div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Quick Link</span>
            <span>Home</span>
            <span>Blogs</span>
            <span>FeedBack</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Contact us</span>
            <span>Linkedin</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
