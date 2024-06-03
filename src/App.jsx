import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";

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
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route}>
        <h1>Welcome to WordLand </h1>
      </RouterProvider>
    </>
  );
}

export default App;
