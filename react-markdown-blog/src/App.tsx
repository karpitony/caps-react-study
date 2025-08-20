import { createBrowserRouter, RouterProvider } from "react-router";

import RootPage from "./pages/Root";
import PostPage from "./pages/Post";
import SinglePostPage from "./pages/SinglePost";

import RootLayout from "./layouts/RootLayout";

function App() {
  const router = createBrowserRouter([
    { 
      path: "/", 
      element: <RootLayout />, 
      children: [
        { path: "/", element: <RootPage /> },
        { path: "/posts", element: <PostPage /> },
        { path: "/posts/:postId", element: <SinglePostPage /> }
      ] 
    },
  ])
  return <RouterProvider router={router} />
}

export default App
