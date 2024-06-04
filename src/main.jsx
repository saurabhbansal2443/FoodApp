import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Aboutus from "./Aboutus";
import ContactUs from "./ContactUs.jsx";
import Error from "./Error.jsx";
import Body from "./Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./ProductPage.jsx";
import ShimmerUI from "./ShimmerUI.jsx";
import Cart from "./Cart.jsx";
// import Grocery from "./Grocery.jsx";

const Grocery = lazy(() => import("./Grocery.jsx"));

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
      {
        path: "/contact",
        element: <ContactUs ></ContactUs>
      },
      {
        path: "/about",
        element: <Aboutus name={"saurabhBansal"}></Aboutus>
      }, {
        path: "/product/:proID",
        element: <ProductPage></ProductPage>
      }, {
        path: "/cart",
        element: <Cart></Cart>
      },{
        path: "/grocery",
        element:(
          <Suspense fallback={<ShimmerUI></ShimmerUI>}>
            <Grocery></Grocery>
          </Suspense>
        )
      }
    ],
    errorElement: <Error></Error> 
  },
  // { path: "/about", element: <Aboutus></Aboutus> },
  // { path: "/contact", element: <ContactUs></ContactUs> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={appRouter}></RouterProvider>
 
);
