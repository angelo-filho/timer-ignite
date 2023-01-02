import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/historic",
    element: <div>Historic</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
