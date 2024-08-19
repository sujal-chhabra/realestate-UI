import Homepage from "./Routes/Homepage/Homepage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./Routes/Layout/Layout";
import ListsPage from './Routes/Homepage/ListsPage/ListsPage';
import SinglePage from "./Routes/SinglePage/SinglePage";
import ProfilePage from "./Routes/ProfilePage/ProfilePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Layout />),
      children: [{
        path:"/",
        element: <Homepage />
      },
      {
        path:"/list",
        element: <ListsPage />
      },{
        path:"/:id",
        element: <SinglePage />
      },{
        path:"/list",
        element: <ListsPage />
      },{
        path:"/profile",
        element:<ProfilePage />
      }

    ]
    }
  ]);
  return (
      <RouterProvider router={router} />
  )
}

export default App