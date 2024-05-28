import Background from "../assets/banff-mountains.jpg";
import Portrait from "../assets/hiking-portrait.jpg";
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

    return(
        <div 
            style={{backgroundImage: "url(" + Background + ")"}}
            className="about-page-container">
            <div className="about-page-headshot-container">
                <img className="about-page-portrait" src={Portrait}/>
            </div>
            <div className="about-page-info-container">
                <h1>Hi, I'm Cam!</h1>
                <p>{aboutMe1}</p>
                <br></br>
                <p>{aboutMe2}</p>
                <br></br>
                <MultiColouredText text={["Happy", "Coding!"]} />
            </div>
        </div>
    );
}
