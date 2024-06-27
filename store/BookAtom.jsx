import { atom, selector } from "recoil";

const searchState=atom({
  key:"searchState",
  default:{
    action:"Genre",
    Word:"Adventure"
  }
})

const bookDataSelector = selector({
  key: "bookDataSelector",
  get: async ({ get }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/Books`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      });

      const books = await res.json();
      return books;
    } catch (e) {
      return [];
    }
  },
});

const TopBookData = selector({
  key: "TopBookData",
  get: async ({ get }) => {
    const BookData = get(bookDataSelector);
    try{
    if (BookData) {
      const Books = BookData.Books.filter((ele) => ele.Star == 5);
      const topBooks = Books.slice(0, 6);

      return topBooks;
    } else {
      return [];
    }}catch(error){
      return [];
    }
  },
});

const currentBookState = atom({
  key: "currentBookState",
  default: {
    _id:'66747a7ae18df006e40096b4',
    Genre: "Thriller",
    Book_name: "Behind Closed Doors",
    Star: 5,
    Author_name: "B.A. Paris",
    ImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/wordland-abad6.appspot.com/o/thriller%2FBehind%20Closed%20Doors.jpg?alt=media&token=0645a0bb-e6b6-4ccf-8f73-c219497533e1",
    Description:
      "Everyone knows a couple like Jack and Grace. He has looks and wealth, she has charm and elegance. You might not want to like them, but you do.",
    PDFUrl:
      "https://drive.google.com/file/d/1nT6ztwCaS7L6G9Nq6PuG50tftURe_3K8/preview",
  },
});

const ShowDetailCard = atom({
  key: "ShowDetailCard",
  default: false,
});
export { bookDataSelector, TopBookData, currentBookState, ShowDetailCard,searchState };
