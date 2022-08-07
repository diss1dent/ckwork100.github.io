import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "../NotFound/NotFoud";
import {SITE_URL} from "../../constants";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={SITE_URL + '/'} element={<Home/>}/>
        <Route path={SITE_URL + '/catalog'} element={<Catalog/>}>
          <Route path={':slug'} element={<Catalog/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;