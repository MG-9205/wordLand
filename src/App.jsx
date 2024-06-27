import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { RecoilRoot } from "recoil";
import Search from "./pages/Search";
import ReadingSection from "./pages/ReadingSection";
import FeedBack from "./pages/FeedBack";
import Library from "./pages/Library";
import Loader from "./components/Loader";

const Explore = lazy(() => import("./pages/Explore"));
const Home = lazy(() => import("./pages/Home"));

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
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/Explore",
        element: (
          <Suspense fallback={<Loader />}>
            <Explore />
          </Suspense>
        ),
      },
      {
        path: "/ReadingSection",
        element: <ReadingSection />,
      },
      {
        path: "/Search",
        element: <Search />,
      },
      {
        path: "/FeedBack",
        element: <FeedBack />,
      },
      {
        path: "/Library",
        element: <Library />,
      },
    ],
  },
  {
    path: "/Login",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <Suspense fallback={<Loader />}>
        <SignUp />
      </Suspense>
    ),
  },
]);
function App() {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={route}></RouterProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
