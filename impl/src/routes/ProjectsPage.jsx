import Projects from "../components/Projects";

export default function ProjectsPage() {


    return(
        <div className="projects-page-container"> 
            <div className="projects-page-top-text-container">
                <h1 className="projects-page-title">
                    Personal Projects
                </h1>
                <p className="projects-page-info">
                    The following are previews of my personal programming projects.
                    The best project is one that you will finish. With that in mind
                    I tried to focus on my interests when conceptualizing these
                    projects. Hope you enjoy!
                </p>
            </div>
            <div className="projects-page-preview-container">
                <Projects />
            </div>
        </div>
    );
}
