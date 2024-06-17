import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ReadingSection from "./pages/ReadingSection";
import Explore from "./pages/Explore";
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"/Explore",
        element: <Explore/>
      }
    ],
  },
  {
    path: "/Login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route}>
      </RouterProvider>
    </>
  );
}

export default App;
