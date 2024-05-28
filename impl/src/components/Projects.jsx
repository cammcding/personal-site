import nflCombineImage from "../assets/NFL_Scouting_Combine_logo.png";
import htmlCssStockImage from "../assets/html-css-stock-image.png";
import bbScoreStockImage from "../assets/basketball-scoreboard-stock.png";

import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {

    return(
        <>
        <ProjectCard 
            name="NFL Combine Data Analysis"
            imgSource={nflCombineImage}
            desc="Historical analysis of the correlation between performance 
                  in various combine drills and NFL success. Measured accross 
                  different postions."
            langs={["Python", "SQL"]}
            link="https://github.com/cammcding/nfl-data-analysis-may-2023"/>
        <ProjectCard 
            name="Personal Website"
            imgSource={htmlCssStockImage}
            desc="The source code for this very website!"
            langs={["HTML", "CSS", "JavaScript", "React"]}
            link="https://github.com/cammcding/personal-site"/>
        <ProjectCard 
            name="Basketball Lineup Analytics Tracking Sheet"
            imgSource={bbScoreStockImage}
            desc={"A google sheets tool designed to both log raw lineup " +
            "data as well as sort and display the four factors of basketball " +
            "with a relative lineup score. This tool relies on an AppsScript " +
            "function, however this has been left out of the shared version. " +
            "This tool has been used by Laurier Basketball as well " +
            "as Canada and Morocco Basketball!"}
            langs={["JavaScript", "Google Apps Script", "Google Sheets"]}
            link={"https://docs.google.com/spreadsheets/d/1XdgQHE6tJQ14sML5Oh" +
                  "2-nSFBlZQA-u4FYEYSKpPKKcY/edit?usp=sharing"}/>
        </>
    );
}
