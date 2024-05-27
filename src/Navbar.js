import App from "./App";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <img src="https://logopond.com/logos/f769ca74308454b8105edd767151818e.png"  alt="logo_1"></img>
            </div>

            <div className="navbar_link">
                <a href="">HOME</a>
                <a href="">ABOUT ME</a>
                <a href="">EXPERIENCE</a>
                <a href="">TESTIMONIAL</a>
                <a href="">CONTACT</a>
            </div>
        </div>
    )
}
export default Navbar;