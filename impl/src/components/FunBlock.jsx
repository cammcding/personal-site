import { forwardRef } from "react";
import BlockSVG from "../assets/square-svgrepo-com.svg"
import PropTypes from "prop-types";


const FunBlock = forwardRef(function FunBlock(props, ref) {
    const pos = props.pos;

    // After animation moving block to edge, this will be true
    const canExpand = false;  

    return(
        <div className="fun-block" id={pos + "-block"} ref={ref}>
            <img src={BlockSVG} />
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
