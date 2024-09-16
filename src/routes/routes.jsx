import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from "../components/login/login_screen"

const handleFallback = (Component) => {
    return (
      <Suspense fallback={<HashLoader />}>
        <Component />
      </Suspense>
    )
  }

export const routes = createBrowserRouter([
    {
      path: '/',
      element: handleFallback(LoginPage),
      children: [],
    }
])


export default function Routes() {
    return (
      <AnimatePresence>
        <RouterProvider router={routes}></RouterProvider>
      </AnimatePresence>
    )
}