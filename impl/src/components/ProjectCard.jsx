import PropTypes from "prop-types";

export default function ProjectCard(props) {

    const langListItems = props.langs.map((lang) => 
        <li className="project-card-lang-used" key={lang}>{lang}</li>
    );

    return(
        <div className="project-card">
            <div className="project-card-title-container">
                <a className="project-card-open-link" href={props.link}>
                    <h2 className="project-card-title">{props.name}</h2>
                </a>
            </div>
            <div className="project-card-img-container">
                <img className="project-card-img" src={props.imgSource}></img>
            </div>
            <div className="project-card-desc-container">
                <p className="project-card-desc">{props.desc}</p>
            </div>
            <div className="project-card-langs-container">
                <h3 className="project-card-lang-title">
                    Languages/Tools/Frameworks Used:
                </h3>
                <ul className="project-card-langs-list">
                    {langListItems}
                </ul>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    imgSource: PropTypes.string,
    desc: PropTypes.string,
    langs: PropTypes.array,
    link: PropTypes.string,
};

