import App from "../App";
import "./Navbar.css";
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="https://logopond.com/logos/f769ca74308454b8105edd767151818e.png"  alt="logo_1"></img>
            </div>

            <div className="navbar_link">
                <a href="" className={"navbar-item"}>HOME</a>
                <a href="" className={"navbar-item"}>ABOUT</a>
                <a href="" className={"navbar-item"}>CORE-SKILLS</a>
                <a href="" className={"navbar-item"}>EDUVENTURES</a>
                <a href="" className={"navbar-item"}>CONNECT</a>
            </div>
        </nav>
    )
}

export default Navbar;