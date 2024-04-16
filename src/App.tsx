import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  About,
  CatalogCategory,
  CatalogPage,
  Home,
  Info,
  Products,
} from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/info/:id",
      element: <Info />,
    },
    {
      path: "/catalog",
      element: <CatalogPage />,
    },
    {
      path: "/catalog/:category",
      element: <CatalogCategory />,
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
