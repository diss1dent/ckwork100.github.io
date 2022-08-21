import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "../NotFound/NotFoud";
import {SITE_URL} from "../../constants";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={SITE_URL + '/'} element={<Home/>}/>
        <Route path={SITE_URL + '/catalog'} element={<Catalog/>}>
          <Route path={':slug'} element={<Catalog/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  )
}

export default AppRoutes;