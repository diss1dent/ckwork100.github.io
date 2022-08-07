import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Category from "./Content/Category";
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {SITE_URL} from "../../constants";
//import AppsIcon from '@mui/icons-material/Apps';

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="card">
        <div className="card-sidebar">
          <Link to={SITE_URL} className={"card-sidebar__toplink"} >
            <HomeIcon color='secondary' sx={{ color: 'primary', fontSize: 50 }}/>
            {/*<AppsIcon sx={{ fontSize: 50 }}/>*/}
          </Link>
          <Sidebar/>
        </div>
        <div className="card-content">
          <Category/>
        </div>
      </div>
    </div>
  )
}
export default Catalog
