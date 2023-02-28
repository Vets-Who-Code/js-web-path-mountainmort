import { useLocation } from "react-router-dom";

const headshot = require('../../resources/img/josh_headshot.jpg');

export function HeaderLinks() {
    const onHomePage = useLocation().pathname === "/";

    if (onHomePage) {
        return (
            <nav>
                <ul className="header-nav-links">
                    <li><a href="#dashboard"><button type="button" className="header-nav-link-button">Dash</button></a></li>
                    <li><a href="#code"><button type="button" className="header-nav-link-button">Code</button></a></li>
                    <li><a href="#run"><button type="button" className="header-nav-link-button">Run</button></a></li>
                    <li><a href="#links"><button type="button" className="header-nav-link-button">Links</button></a></li>
                </ul>
            </nav>
        );
    }
    else {
        return (
            <nav>
                <ul className="header-nav-links">
                    <li><a href="/"><button type="button" className="header-nav-link-button">Home</button></a></li>
                </ul>
            </nav>
        );
    }
}

export default HeaderLinks;