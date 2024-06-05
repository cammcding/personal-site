import Projects from "../components/Projects";
import MultiColouredText from "../components/MultiColouredText";

export default function ProjectsPage() {

    return(
        <div className="projects-page-container"> 
            <div className="projects-page-buffer"></div>
            <div className="projects-page-top-text-container">
                <h1 className="projects-page-title">
                    Personal Projects
                </h1>
                <p className="projects-page-info">
                    The following are previews of both my personal programming 
                    projects and interesting school projects. The best project 
                    is one that you will finish! So with that in mind,
                    I prioritized my interests when developing these. 
                    Hope you enjoy!
                </p>
                
            </div>
            <h3 className="projects-page-link-prompt">
                Click on a project title for its external link 
            </h3>
            <div className="projects-page-project-cards-container">
                <Projects />
            </div>
            <div className="projects-page-more-coming-text">
                <MultiColouredText 
                    text={["More", " projects ", " coming ", "soon!"]}/>
            </div>
        </div>
    );
}
