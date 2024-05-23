import { Outlet, NavLink } from "react-router-dom";

export default function NavBar() {
    
    return(
        <>
        <div>
            <nav className="global-navbar-container">
                <ul>
                    <li className="global-navbar-item" id="home-item">
                        <NavLink to="/home" className="global-navbar-link" id="home-link">
                            Home
                        </NavLink>
                    </li>
                    <li className="global-navbar-item" id="projects-item">
                        <NavLink to="/projects" className="global-navbar-link" id="projects-link">
                            Projects
                        </NavLink>
                    </li>
                    <li className="global-navbar-item" id="about-item">
                        <NavLink to="/about" className="global-navbar-link" id="about-link">
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="global-page-contents-container">
            {/*location that the page is rendered*/}
            <Outlet />
        </div>
        </>
        
        
    );
}
