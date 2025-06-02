import Home from "./pages/Home"
import Result from "./pages/Result"
import BuyCredit from "./pages/BuyCredit"
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom"
import AppLayout from "./components/Layout/AppLayout"
import AppContextProvider from "./context/AppContext"
import BackgroundRemoval from "./pages/BackgroundRemoval"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "buycredit",
        element: <BuyCredit />,
      },
      {
        path: "background-removal",
        element: <BackgroundRemoval />,
      },
    ],
  },
])

const App = () => {
  return (
    <AppContextProvider>
      <RouterProvider router={routes} />
    </AppContextProvider>
  )
}

export default App
