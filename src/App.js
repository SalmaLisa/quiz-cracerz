import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import QuizPage from "./components/QuizPage/QuizPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home />,
        },
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home />,
        },
        {
          path: "/home/:topicId",
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            ),
          element: <QuizPage />,
        },
        {
          path: "/statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
