import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './Components/Addcoffee/Addcoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee/UpdateCoffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffee"),
    children: [
      {
        path: "/addcoffee",
        element: <Addcoffee></Addcoffee>,
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
