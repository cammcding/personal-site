/* 
Provides the multi-coloured fun text using some associated css.
Alternates between orange, purple, green, and blue.

Accepts text content as an array of text (each element will alternate in colour)

*/

import PropTypes from "prop-types";

export default function MultiColouredText(props) {
    const mcMapToSpan = (textSection, index) => {
       
        return(
            <span 
                className="general-multi-coloured-text"
                key={"coloured-section-" + index}>
                    
                {textSection}
            </span>
        );
    };

    const mcText = props.text?.map(mcMapToSpan);

    return(
        <section className="multi-coloured-text-section">
            {mcText}
        </section>
    );
}

MultiColouredText.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string),
};
