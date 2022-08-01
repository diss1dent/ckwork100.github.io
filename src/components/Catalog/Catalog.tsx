import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Category from "./Content/Category";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="card">
        <div className="card-sidebar">
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
