import imgSrc from "../assets/top-left-fun-block.svg";

import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {

    return(
        <>
        <ProjectCard 
            name="NFL Combine Data Analysis"
            imgSource={imgSrc}
            desc="Historical analysis of the correlation between performance 
                  in various combine drills and NFL success. Measured accross 
                  different postions."
            langs={["Python", "SQL"]}
            link="https://github.com/cammcding/nfl-data-analysis-may-2023"/>
        </>
    );
}
