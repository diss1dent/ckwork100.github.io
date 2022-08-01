import React from "react";
import {connect, ConnectedProps} from "react-redux";
import { useNavigate } from "react-router-dom";
import {MenuItem} from "../../../state/interfaces/navigationIntefaces";
import {RootState} from "../../../state/store";
import {setActiveMenu} from "../../../state/action-creators/navigationFunctions";

const Sidebar = (props: PropsFromRedux) => {
  const {menu, activeMenu, setActiveMenu} = props;
  let navigate = useNavigate();

  const handleClick = (menuItem: MenuItem) => {
    setActiveMenu(menuItem);
    navigate (menuItem.route);
  }
  return (
    <div className={"sidebar"}>
      <ul className={"sidebar-list"}>
        {
          menu.map((menuItem: MenuItem, index: number) => {
            const isActive = activeMenu.route === menuItem.route
            return (
              <li key={index}
                  className={"sidebar-item" + (isActive ? " sidebar-item__active" : "")}
                  onClick={() => handleClick(menuItem)}
              >
                {menuItem.title}
              </li>
            )
          })
        }
      </ul>
      <div className="sidebar-curved">
        <svg height="210" width="100" className={"sidebar-curved__svg"}>
          <path stroke="" fill="#f8f8f8" d="M 100 200 Q -50 100 100 0 "/>
          <circle fill="#0c7b3e" cx="50" cy="100" r="10"/>
        </svg>
      </div>
    </div>
  )
}

type PropsFromRedux = ConnectedProps<typeof connector>

const mapState = (state: RootState) => ({
  menu: state.navigationState.menu,
  activeMenu: state.navigationState.activeMenu
})

const mapDispatch = {
  toggleOn: () => ({type: 'TOGGLE_IS_ON'}),
  setActiveMenu
}
const connector = connect(mapState, mapDispatch)

export default connector(Sidebar)