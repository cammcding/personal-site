import AnimatedBlocks from "../components/AnimatedBlocks";
import MultiColouredText from "../components/MultiColouredText";

export default function HomePage() {


    return(
        <div className="home-page-container">
            <div className="home-page-blocks-container" id="blocks">
                <AnimatedBlocks />
            </div>
            <div className="home-page-title-container">
                <MultiColouredText text={["Make", " Coding ", " More ", "Fun"]}/>
            </div>
        </div>
    );
}
