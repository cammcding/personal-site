import { forwardRef } from "react";
import svgTL from "../assets/top-left-fun-block.svg";
import svgTR from "../assets/top-right-fun-block.svg";
import svgBL from "../assets/bottom-left-fun-block.svg";
import svgBR from "../assets/bottom-right-fun-block.svg";
import PropTypes from "prop-types";

const FunBlock = forwardRef(function FunBlock(props, ref) {
    const pos = props.pos;

    let svgToUse = svgTL;
    if (pos == "top-left") svgToUse = svgTL;
    else if (pos == "top-right") svgToUse = svgTR;
    else if (pos == "bottom-left") svgToUse = svgBL;
    else if (pos == "bottom-right") svgToUse = svgBR;

    return(
        <div className="fun-block" id={pos + "-block"} ref={ref}>
            <img src={svgToUse} />
        </div>
    );
});

FunBlock.propTypes = {
    pos: PropTypes.oneOf(
        ["top-left", 
        "top-right", 
        "bottom-left", 
        "bottom-right"]),
};

export default FunBlock;
