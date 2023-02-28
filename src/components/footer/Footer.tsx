
// const headshot = require('../../resources/img/josh_headshot.jpg');

export function Footer() {
    return (
        <footer id="links">
            <div className="section-logo">
                <h3>Links</h3>
                <span className="section-logo-icon material-symbols-outlined">
                    link
                </span>
            </div>

            <div className="section-content">
                
                <div className="footer-contact">
                    <h4>Personal</h4>
                    <div className="footer-section-icons">
                        <a href="mailto:jdmorton25@gmail.com?subject=Hello!"><img src="resources/img/gmail.svg" className="footer-icon" title="Email me" alt="Email" /></a>
                        <a href="https://www.linkedin.com/in/mountainmort"><img src="resources/img/linkedin.svg" className="footer-icon" title="Connect on LinkedIn" alt="LinkedIn" /></a>
                        <a href="contactForm"><img src="resources/img/export_notes.svg" className="footer-icon" title="Contact me via Form" alt="Contact Form" /></a>
                        <a href="podcasts"><img src="resources/img/pocket-casts.svg" className="footer-icon" title="My Favorite Podcasts" alt="Podcasts" /></a>
                    </div>
                </div>

                <div className="footer-code">
                    <h4>Code</h4>
                    <div className="footer-section-icons">
                        <a href="https://github.com/mountainmort"><img src="resources/img/github.svg" className="footer-icon" title="View my Github" alt="Github" /></a>
                        <a href="https://www.figma.com/file/M7GgyRX5TwyG8KPiMFOhDI/Mountainmort---Wireframe-and-Brainstorming?node-className=0%3A1&t=HMduaMtFdj9gCTYr-1"><img src="resources/img/figma.svg" className="footer-icon" title="View this page's Figma" alt="Figma" /></a>
                        {/* <button className="footer-button" onclick="jsApiFunction()"><span className="footer-icon material-symbols-outlined">api</span></button> */}
                        <button className="footer-button" ><span className="footer-icon material-symbols-outlined">api</span></button>
                    </div>
                </div>

                <div className="footer-run">
                    <h4>Running</h4>
                    <div className="footer-section-icons">
                        <a href="https://www.strava.com/athletes/mountainmort"><img src="resources/img/strava.svg" className="footer-icon" title="Connect on Strava" alt="Strava" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;