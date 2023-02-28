import HeaderLinks from "./HeaderLinks";

const headshot = require('../../resources/img/josh_headshot.jpg');

export function Header() {
    return (
        <header>            
            <div className="header-hero">

                <div className="header-logo">
                    <img src={headshot} className="header-logo-img" title="Headshot" alt="Headshot" />
                </div>

                <div className="header-title">
                    <h2 className="name">Josh Morton</h2>
                    <h3 className="tagline">Code Fast, Run Far</h3>
                </div>
            </div>

            <HeaderLinks></HeaderLinks>
            
        </header>
    );
}

export default Header;