import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header";
import Body from "./componant/Body";
// import About from "./componant/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./componant/Contact";
import Cards from "./componant/Cards";
import Error from "./componant/Error";
import RestorantMenu from "./componant/RestorantMenu";
import UserContext from "./utils/UserContext";
import { useState } from "react";
// import Grocery from "./componant/Grocery";

const Grocery = lazy(() => import("./componant/Grocery"));
const About = lazy(() => import("./componant/About"));

const AppLayout = () => {
  const [UserName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Vaibhav patil",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: UserName,setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Cards",
        element: <Cards />,
      },
      {
        path: "/restorants/:resId",
        element: <RestorantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
