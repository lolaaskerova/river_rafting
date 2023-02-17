import AboutUs from "../pages/AboutUs";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import Basket from "../pages/Basket";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";
import Gallery from "../pages/Gallery";
import GettingHere from "../pages/GettingHere";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import PackagesAndSpecials from "../pages/PackagesAndSpecials";
import Tours from "../pages/Tours";
import NotFound from "../pages/NotFound";
import CheckOut from "../pages/CheckOut";
import AdminRoot from "../pages/AdminRoot";
import Admin from "../pages/Admin";

export const ROUTES = [
  {
    path: "",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/package",
        element: <PackagesAndSpecials />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/gethere",
        element: <GettingHere />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/check",
        element: <CheckOut />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
];
