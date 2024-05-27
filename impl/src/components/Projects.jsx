import nflCombineImage from "../assets/NFL_Scouting_Combine_logo.png";
import htmlCssStockImage from "../assets/html-css-stock-image.png";

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
        </>
    );
}
