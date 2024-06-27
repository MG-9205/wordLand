import { atom } from "recoil";

const storedUserState = localStorage.getItem("username") || "Login";

const userState=atom({
    key:"userState",
    default:storedUserState
})



export{userState}