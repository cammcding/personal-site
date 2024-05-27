import Projects from "../components/Projects";
import MultiColouredText from "../components/MultiColouredText";

export default function ProjectsPage() {

    return(
        <div className="projects-page-container"> 
            <div className="projects-page-top-text-container">
                <h1 className="projects-page-title">
                    Personal Projects
                </h1>
                <p className="projects-page-info">
                    The following are previews of my personal programming projects.
                    The best project is one that you will finish! So with that in mind,
                    I prioritized my interests when developing these projects. 
                    Hope you enjoy!
                </p>
            </div>
            <div className="projects-page-preview-container">
                <Projects />
            </div>
            <div className="projects-page-more-coming-text">
                <MultiColouredText 
                    text={["More", " projects ", " coming ", "soon!"]}/>
            </div>
        </div>
    );
}
