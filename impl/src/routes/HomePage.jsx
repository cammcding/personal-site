import AnimatedBlocks from "../components/AnimatedBlocks";

export default function HomePage() {


    return(
        <div className="home-page-container">
            <div className="home-page-blocks-container" id="blocks">
                <AnimatedBlocks />
            </div>
            <div className="home-page-title-container">
                <span className="home-page-title" id="title-make">MAKE</span>
                <span className="home-page-title" id="title-coding"> CODING </span>
                <span className="home-page-title" id="title-more"> MORE </span>
                <span className="home-page-title" id="title-fun">FUN</span>
            </div>
        </div>
    );
}
