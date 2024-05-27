import { useState } from "react";
import AnimatedBlocks from "../components/AnimatedBlocks";
import MultiColouredText from "../components/MultiColouredText";

export default function HomePage() {
    const mainTextContent1 = "Unfortunately, in a world driven by profit, " +
    "passion is often left behind. Programming is no exception. Being a " +
    "field centred around problem solving, many inspired and passionate " +
    "people are drawn in, only to be led down a path of high-pressure and " +
    "creativity-barren repetition. I believe some of our best work is done " +
    "under no pressure other than our own. Starting with simple play and " +
    "discovery, which uncovers points of interest, through which the internal " +
    "desire to learn, build, and make meaning can carry us far. Making coding " +
    "more fun may not have world-saving potential, but it is nonetheless a " +
    "huge step in the right direction.";

    const mainTextContent2 = "Some say the only limit is your imagination. " +
    "But without dedication, that imagination doesn't take you very far. A " +
    "spark of passion is thus an incredible thing, as it provides a pathway " + 
    "for dedication to lead you to the greatest goals your imagination can " +
    "conceive. Good Luck!";

    // Priming the text content for multi-colour.
    const mcMainTextContent1 = mainTextContent1.split(" ");
    const mcMainTextContent2 = mainTextContent2.split(" ");

    // Normal text HTML element
    const mainText = 
    <>
        <p className="home-page-main-text1">{mainTextContent1}</p>
        <br/>
        <p className="home-page-main-text2">{mainTextContent2}</p>
    </>;

    // Multi-coloured text HTML element
    const mcMainText = 
    <>
        <MultiColouredText 
            className="home-page-main-text1" 
            text={mcMainTextContent1}/>
        <br/>
        <br />
        <MultiColouredText 
            className="home-page-main-text2"
            text={mcMainTextContent2}/>
    </>;

    const [mainTextToDisplay, setMainTextToDisplay] = useState(mainText);
    const [colourizeButtonText, setColourizeButtonText] = useState("Colourize!");
    const [isColourized, setColourized] = useState(false);
    
    const changeMainTextColour = () => {
        console.log("colourized: " + isColourized);
        
        if (isColourized) {  // need to revert to normal
            setColourizeButtonText("Colourize!");
            setMainTextToDisplay(mainText);
        } else {  // Need to colourize
            setColourizeButtonText("Normal :(");
            setMainTextToDisplay(mcMainText);
        }
        
        setColourized(!isColourized);
    };
    

    return(
        <div className="home-page-container">
            <div className="home-page-blocks-container" id="blocks">
                <AnimatedBlocks />
            </div>
            <div className="home-page-title-container">
                <MultiColouredText text={["Make", " Coding ", " More ", "Fun"]}/>
            </div>
            <div className="home-page-main-content-container">
                <div className="home-page-main-text-container">
                    {mainTextToDisplay}
                </div>
                <div className="home-page-colourize-container">
                    <h2>Not fun enough?</h2>
                    <button 
                        className="home-page-colourize-button"
                        onClick={changeMainTextColour}>
                            
                        {colourizeButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
}
