/* 
Provides the multi-coloured fun text using some associated css.
Alternates between orange, purple, green, and blue.

Accepts text content as an array of text (each element will alternate in colour)

*/

import PropTypes from "prop-types";

export default function MultiColouredText(props) {

    const mcText = props.text.map((textSection) =>
        <span className="general-multi-coloured-text">{textSection}</span>
    );

    return(
        <>
            {mcText}
        </>
    );
}

MultiColouredText.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string),
};
