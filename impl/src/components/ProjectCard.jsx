import PropTypes from "prop-types";

export default function ProjectCard(props) {

    const langListItems = props.langs.map((lang) => 
        <li className="language-used" key={lang}>{lang}</li>
    );

    return(
        <div className="project-card">
            <img className="project-card-img" src={props.imgSource}></img>
            <h2 className="project-card-title">{props.name}</h2>
            <p className="project-card-desc">{props.desc}</p>
            <h3 className="project-card-lang-title">
                Languages/Tools/Frameworks Used:
            </h3>
            <ul className="project-card-languages-used-list">
                {langListItems}
            </ul>
        </div>
    );
}

ProjectCard.propTypes = {
    name: PropTypes.string,
    imgSource: PropTypes.string,
    desc: PropTypes.string,
    langs: PropTypes.array,
    link: PropTypes.array,
};

