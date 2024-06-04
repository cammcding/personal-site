import { Outlet, NavLink } from "react-router-dom";
import MultiColouredText from "../components/MultiColouredText";

export default function NavBar() {
    return(
        <>
        <div>
            <nav className="global-navbar-container">
                <div className="global-navbar-left">
                    <div className="global-navbar-name" id="first-name">
                        Cam
                    </div>
                    <div className="global-navbar-name" id="last-name">
                        Dingman
                    </div>
                    {/* <MultiColouredText 
                        text={["C", "a", "m"]}/>
                    <MultiColouredText
                        text={["D", "i", "n", "g", "m", "a", "n"]} /> */}
                </div>
                <div className="global-navbar-right">
                    <ul className="global-navbar-page-buttons">
                        <li className="global-navbar-item" id="home-item">
                            <NavLink 
                                to="/home" 
                                className="global-navbar-link" 
                                id="home-link">
                                
                                Home
                            </NavLink>
                        </li>
                        <li className="global-navbar-item" id="projects-item">
                            <NavLink 
                                to="/projects" 
                                className="global-navbar-link" 
                                id="projects-link">

                                Projects
                            </NavLink>
                        </li>
                        <li className="global-navbar-item" id="about-item">
                            <NavLink 
                                to="/about" 
                                className="global-navbar-link" 
                                id="about-link">

                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="global-page-contents-container">
            {/*location that the page is rendered*/}
            <Outlet />
        </div>
        </>
        
        
    );
}
