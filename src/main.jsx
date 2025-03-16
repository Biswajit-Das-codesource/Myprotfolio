import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProjectsSection from "./components/Projects.jsx";
import All from "./components/All.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      { 
        path:"/",
        element:<All/>
      },
      {
        path:"/projects",
        element:<ProjectsSection/>
      }
    ]
  },
 
]);
createRoot(document.getElementById("root")).render(
  
  <Provider store={store}>
    <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
    </RouterProvider>
  </Provider>
  
);
