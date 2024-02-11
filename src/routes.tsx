import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ConnectingToTheBackend from "./Components/ConnectingToTheBackend";

const routers = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "backend", element: <ConnectingToTheBackend /> }
]);


export default routers;