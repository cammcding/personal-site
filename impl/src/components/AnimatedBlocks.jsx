import { motion, useInView, useAnimate, motionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import useWindowDimensions from "../custom-hooks/UseWindowDimension";
import FunBlock from "./FunBlock";


export default function AnimatedBlocks() {

    const MotionFunBlock = motion(FunBlock, { forwardMotionProps: true });
    const gridBGColour = motionValue("#ffffff");
    const gridBoxShadow = motionValue("0px 0px 20px 3px white");
    const [animationTrigger, animate] = useAnimate();
    const { height, width } = useWindowDimensions();
    const isInView = useInView(
        animationTrigger, 
        {
            margin: "0px 0px -650px 0px",
            amount: "some",
        }
    );
    
    const forwardAnimations = [
        ["#top-left-block", 
         { y: [0, -height/2], rotate: 180, opacity: 0 }],
        ["#top-right-block", 
         { x: [0, width/2], rotate: 180, opacity: 0 }, 
         { at: "<" }],
        ["#bottom-right-block", 
         // This one should go a bit further since they will be scrolling down
         { y: [0, height/1.5], rotate: 180, opacity: 0 },
         { at: "<" }],
        ["#bottom-left-block", 
         { x: [0, -width/2], rotate: 180, opacity: 0 }, 
         { at: "<" }],
    ];

    useEffect(() => {
        if (isInView) {
            animate(forwardAnimations, { duration: 5, type: "spring"});
            animate(gridBGColour, "transparent", { duration: 3 });
            animate(gridBoxShadow, "0px 0px 0px 0px white");
        }
    }, [isInView]);

    return(
        <motion.div 
            className="home-page-animated-blocks"
            id="animated-blocks-grid"
            style={{ backgroundColor: gridBGColour, boxShadow: gridBoxShadow }}
            ref={animationTrigger}>
            <MotionFunBlock 
                className="home-page-motion-fun-block"
                pos="top-left"
            />
            <MotionFunBlock 
                className="home-page-motion-fun-block" 
                pos="top-right"/>
            <MotionFunBlock 
                className="home-page-motion-fun-block"
                pos="bottom-left"/>
            <MotionFunBlock 
                className="home-page-motion-fun-block" 
                pos="bottom-right"/>
        </motion.div>
    );
}

