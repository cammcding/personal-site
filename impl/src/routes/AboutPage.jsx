import Background from "../assets/banff-mountains.jpg";
import Portrait from "../assets/hiking-portrait.jpg";
import GithubLogo from "../assets/github-logo.svg";
import EmailLogo from "../assets/email-logo.svg";
import MultiColouredText from "../components/MultiColouredText";

export default function AboutPage() {

    const aboutMe1 = "I’m an aspiring software developer and current " +
    "computer science student at the University of Waterloo. I’ve been in " +
    "love with math for as long as I can remember, and fell in love with " +
    "programming after taking computer science in high school. I’m always " +
    "looking to build cool things, and learn valuable lessons along the way. " +
    "This website is my space to share some of that passion with you.";

    const aboutMe2 = "Hopefully something here inspired you! And don’t " +
    "forget to go outside, there’s lots to see out there… ";
    
    // Breaking email up like this adds extra protect from spam bots scraping
    //   the page.
    const eml = 'ca' + 'm.' + 'mc' + 'di' + 'ng' + '@g' + 'ma' + 'il' + '.c' +
    'om';

    

    return(
        <div 
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)), url(" + Background + ")"}}
            className="about-page-container">

            <div className="about-page-headshot-container">
                <img className="about-page-portrait" src={Portrait}/>
            </div>
            <div className="about-page-info-container">
                <div className="about-page-title-container">
                    <h1 className="about-page-title">Hi, I'm Cam!</h1>
                </div>
                <div className="about-page-info">
                    <p>{aboutMe1}</p>
                    <br></br>
                    <p>{aboutMe2}</p>
                    <br></br>
                    <div className="about-page-info-footer">
                        <MultiColouredText 
                            text={["H", "A", "P", "P", "Y", " C", "O", "D", "I", 
                                "N", "G", "!"]} />
                        <div className="about-page-links">
                            <a href="https://github.com/cammcding">
                                <img 
                                    className="about-page-link-logo"
                                    id="github-link" 
                                    src={GithubLogo}/>
                            </a>
                            <a href={"mai" + "lto:" + eml}>
                                <img 
                                    id={"mai" + "l-l" + "ink"}
                                    className="about-page-link-logo" 
                                    src={EmailLogo}/>
                            </a>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    );
}
