import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { About, Catalog, Home, Info, Products } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/info",
      element: <Info />,
    },
    {
      path: "/catalog",
      element: <Catalog />,
    },
    {
      path: "/catalog/:category",
      element: <Catalog />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
