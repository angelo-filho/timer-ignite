import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { Root } from "./pages/Root";
import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme } from "./styles/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/historic",
        element: <div>Historic</div>,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
