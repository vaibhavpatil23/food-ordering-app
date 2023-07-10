import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header";
import Body from "./componant/Body";
import About from "./componant/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./componant/Contact";
import Cards from "./componant/Cards";
import Error from "./componant/Error";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cards",
        element: <Cards />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
