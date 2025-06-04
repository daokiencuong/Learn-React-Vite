import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./error/NotFoundPage.tsx";
import UsersPage from "./screen/users.page.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World!</div>,
  },
  {
    path: "/users",
    element: <UsersPage/>,
  },
  {
    path: "/tracks",
    element: <div>Manage tracks</div>,
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  }
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);
