import { motion, useInView, useAnimate } from "framer-motion";
import { useRef, useEffect } from "react";
import useWindowDimensions from "../custom-hooks/UseWindowDimension";
import FunBlock from "./FunBlock";


export default function AnimatedBlocks() {

    
    // const topLeftScrollRef = useRef(null);
    // const botLeftScrollRef = useRef(null);
    // const topRightScrollRef = useRef(null);
    // const botRightScrollRef = useRef(null);

    const MotionFunBlock = motion(FunBlock, { forwardMotionProps: true });
    const [animationTrigger, animate] = useAnimate();
    const { height, width } = useWindowDimensions();
    const viewportWindowHeight = (-(height / 2));
    const isInView = useInView(
        animationTrigger, 
        {
            margin: "0px 0px -800px 0px",
            amount: "some",
        }
    );
    
    const forwardAnimations = [
        ["#top-left-block", 
         { y: [0, -height/2], rotate: 180, opacity: 0 }],
        ["#top-right-block", 
         { x: [0, -width/2], rotate: 180, opacity: 0 }, 
         { at: "<" }],
        ["#bottom-right-block", 
         { y: [0, height/2], rotate: 180, opacity: 0 },
         { at: "<" }],
        ["#bottom-left-block", 
         { x: [0, width/2], rotate: 180, opacity: 0 }, 
         { at: "<" }]
    ];

    useEffect(() => {
        if (isInView) {
            animate(forwardAnimations, { duration: 5, type: "spring"});
                   
        }
    }, [isInView]);

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return(
        
        <div 
        className="home-page-animated-blocks"
        id="animated-blocks-grid"
        ref={animationTrigger}
        >
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
        </div>
        
    );
}

