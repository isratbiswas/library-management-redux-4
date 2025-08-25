import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBook from '../pages/AddBook';
import AllBooks from "../pages/AllBooks";
import BorrowBook from "../pages/BorrowBook";



const router = createBrowserRouter([
     {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/allBooks",
        element: <AllBooks/>,
      },
      {
        path: "/borrowBook",
      
        element: <BorrowBook/>,
      },
      {
        path: "/addBook",
          element: <AddBook/>,
      },
    ],
  },
]) 

export default router;