import React from "react";
import img11 from "../assets/images/bookImage1.jpg";
import Frame from "../components/Frame";



export default function ReadingSection() {
 
  return (
    <>
    <Frame>
    <div className="flex md:justify-between justify-center md:gap-0 gap-5 md:items-center md:flex-row flex-col font-Montserrat  h-fit md:px-4   shadow-sm  shadow-slate-200 rounded-[10px]">
              <div className="flex gap-5">
                <div className="h-[140px] min-w-[100px] flex justify-center items-center">
                  <img
                    src={img11}
                    alt=""
                    className="h-[140px] w-[100px] object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[1.5rem] font-bold gap-2">
                    The Great Gatsby
                  </span>
                  <span className="text-primary font-DancingScript text-[1.2rem] font-semibold">
                    by: F. Scott Fitzgerald{" "}
                  </span>
                  <span className="pt-2">Genre: Fiction</span>
                  <span> Rating: 4/5</span>
                </div>
              </div>
              <div className="flex flex-col border-l-2 border-primary pl-5 md:mb-0 mb-6 pr-2">
                <div className="text-primary font-semibold">
                  Short Description
                </div>
                <div>
                  <p className="w-[400px]">
                    A dystopian social science fiction novel and cautionary tale
                    about the dangers of totalitarianism.
                  </p>
                </div>
              </div>
            </div>

            <div className="  shadow-sm  shadow-slate-200 rounded-[10px] lg:h-full h-fit">
              <iframe
                src="https://drive.google.com/file/d/1yCHQn5ZvnEpJ5cpIuinuOfR9ovJHWveE/preview"
                frameborder="0"
                className="w-[100%] lg:h-[100%] h-[500px] rounded-[10px] "
              ></iframe>
            </div>
    </Frame>
    
    </>
  );
}
