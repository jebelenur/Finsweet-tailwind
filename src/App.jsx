import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider, } from "react-router-dom";
import Homeindex from "./pages/home/Homeindex"
import Rootlayout from "./components/layouts/Rootlayout";
import Errorpage from "./components/common/Errorpage";
import Blogindex from "./pages/blog/Blogindex";

const routes = createRoutesFromElements(
  <>
    <Route element={<Rootlayout/>}>
      <Route path="/" element={<Homeindex/>}/>
      <Route path="/about" element={"about us"}/>
      <Route path="/sermon" element={"sermons"}/>
      <Route path="/blog" element={<Blogindex/>}/>
      <Route path='/blog/:slug' element={<BlogDetails />} />
    </Route>
    <Route path="*" element={<Errorpage/>}/>
  </>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
