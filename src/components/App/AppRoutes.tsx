import Catalog from "../Catalog/Catalog";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "../NotFound/NotFoud";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ckwork100.github.io/" element={<Catalog/>}>
          <Route path="/ckwork100.github.io/:slug" element={<Catalog/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;