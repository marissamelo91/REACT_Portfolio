function NavBar() {

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

                <li><a href="/" className={isSelected("")}>About</a></li>
                <li><a href="/projects" className={isSelected("projects")}>Projects</a></li>
                <li><a href="/resume" className={isSelected("resume")}>Resume</a></li>
                <li><a href="/contact" className={isSelected("contact")}>Contact</a></li>

            </ul>
        </nav>
    )
}
export default NavBar;