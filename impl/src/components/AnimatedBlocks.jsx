import { motion } from "framer-motion";
import FunBlock from "./FunBlock";


export default function AnimatedBlocks() {

    const inExpandablePos = false;

    const expandText = (pos) => {
        if (!inExpandablePos) return;

        // Able to expand

    }

    const MotionFunBlock = motion(FunBlock);

    return(
        <div>
            <MotionFunBlock animate={{ x: 100 }} pos="top-left" onClick={() => expandText(pos)}/>
            <MotionFunBlock pos="top-right" onClick={() => expandText(pos)}/>
            <MotionFunBlock pos="bottom-left" onClick={() => expandText(pos)}/>
            <MotionFunBlock pos="bottom-right" onClick={() => expandText(pos)}/>
        </div>
    );
}
