import React from 'react'
import img2 from "../assets/images/bookReading1.png";
import img11 from '../assets/images/bookImage1.jpg'
import Card1 from '../components/Card1';
import { ArrowRight,ArrowLeft } from 'lucide-react';

export default function Explore() {
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
        }
    ];
  return (
    
    
    <>
    <div className='pt-[80px]'>
    <div className="pt-8 overflow-x-hidden">
        <div className="flex md:justify-between justify-center items-center px-8 font-DancingScript gap-2">
          <div className="">
            <p className="w-[150px] text-[2.3rem] font-bold">Adventure</p>
          </div>
          <div className="w-[100%] hidden md:block">
            <hr className="border-1 border-black" />
          </div>
          <div>
            <img src={img2} alt="" className="h-[100px] w-[120px]" />
          </div>
        </div>
      
        <div className="flex justify-around items-center flex-wrap gap-y-4 md:gap-4 lg:w-[1000px] m-auto py-10 ">
         {
          books.map((ele,index)=>(
            <Card1 book={ele} key={index} />
          ))
         }
        </div>
        <div className='flex justify-around'>
            
            <button className="text-white bg-primary h-[35px] w-[35px] flex justify-center items-center rounded-[50%]"><ArrowLeft /></button>
            <button className="text-white bg-primary h-[35px] w-[35px] flex justify-center items-center rounded-[50%]" ><ArrowRight /></button>
        </div>
      </div>
      <div className="pt-8 overflow-x-hidden">
        <div className="flex md:justify-between justify-center items-center px-8 font-DancingScript gap-2">
        <div>
            <img src={img2} alt="" className="h-[100px] w-[120px]" />
          </div>
         
          <div className="w-[100%] hidden md:block">
            <hr className="border-1 border-black" />
          </div>
          <div className="">
            <p className="w-[150px] text-[2.3rem] font-bold">Thriller</p>
          </div>
        </div>
      
        <div className="flex justify-around items-center flex-wrap gap-y-4 md:gap-4 lg:w-[1000px] m-auto py-10 ">
         {
          books.map((ele,index)=>(
            <Card1 book={ele} key={index} />
          ))
         }
        </div>
        <div className='flex justify-around'>
            
            <button className="text-white bg-primary h-[35px] w-[35px] flex justify-center items-center rounded-[50%]"><ArrowLeft /></button>
            <button className="text-white bg-primary h-[35px] w-[35px] flex justify-center items-center rounded-[50%]" ><ArrowRight /></button>
        </div>
      </div>
      <div className="pt-8 overflow-x-hidden pb-5">
        <div className="flex md:justify-between justify-center items-center px-8 font-DancingScript gap-2">
          <div className="">
            <p className="w-[150px] text-[2.3rem] font-bold">Mystery</p>
          </div>
          <div className="w-[100%] hidden md:block">
            <hr className="border-1 border-black" />
          </div>
          <div>
            <img src={img2} alt="" className="h-[100px] w-[120px]" />
          </div>
        </div>
      
        <div className="flex justify-around items-center flex-wrap gap-y-4 md:gap-4 lg:w-[1000px] m-auto py-10 ">
         {
          books.map((ele,index)=>(
            <Card1 book={ele} key={index} />
          ))
         }
        </div>
        <div className='flex justify-around'>
            
            <button className="text-white bg-primary h-[35px] w-[35px] flex justify-center items-center rounded-[50%]"><ArrowLeft /></button>
            <button className="text-white bg-primary h-[35px] w-[35px] flex justify-center items-center rounded-[50%]" ><ArrowRight /></button>
        </div>
      </div>
    </div>
    </>
  )
}
