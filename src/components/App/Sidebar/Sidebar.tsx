import {RootState} from "../../../store";
import {connect, ConnectedProps} from "react-redux";
import {setActiveMenu} from "../../../actions/navigationFunctions";

const Sidebar = (props: PropsFromRedux) => {
    const {menu, activeMenu, setActiveMenu} = props;
    return (
        <div className={"sidebar"}>
            <ul className={"sidebar-list"}>
                {
                    menu.map((menuItem: string, index: number) => {
                        const isActive = activeMenu === menuItem
                        return (
                            <li key={index}
                                className={"sidebar-item" + (isActive ? " sidebar-item__active" : "")}
                                onClick={() => {setActiveMenu(menuItem)}}
                            >
                                {menuItem}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="sidebar-curved">
                <svg height="210" width="100" className={"sidebar-curved__svg"}>
                    <path stroke="" fill="#f8f8f8" d="M 100 200 Q -50 100 100 0 " />
                    <circle fill="#0c7b3e" cx="50" cy="100" r="10"/>
                </svg>
            </div>
        </div>

    )
}

type PropsFromRedux = ConnectedProps<typeof connector>

const mapState = (state: RootState) => ({
    menu : state.navigationState.menu,
    activeMenu: state.navigationState.activeMenu
})

const mapDispatch = {
    toggleOn: () => ({ type: 'TOGGLE_IS_ON' }),
    setActiveMenu
}
const connector = connect(mapState, mapDispatch)

export default connector(Sidebar)