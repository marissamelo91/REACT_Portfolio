import { Link, useLocation } from "react-router-dom";
function NavBar() {
    const location = useLocation();

    function isSelected(page) {
        if (page == window.location.href.split("/").pop()) {
            return "selected";
        } else {
            return "";
        }
    }

    return (
        <nav className="header">
            <h1>Marissa Melo</h1>
            <ul>

                <li><Link to="/" className={isSelected("")}>About</Link></li>
                <li><Link to="/projects" className={isSelected("projects")}>Projects</Link></li>
                <li><Link to="/resume" className={isSelected("resume")}>Resume</Link></li>
                <li><Link to="/contact" className={isSelected("contact")}>Contact</Link></li>

            </ul>
        </nav>
    )
}
export default NavBar;