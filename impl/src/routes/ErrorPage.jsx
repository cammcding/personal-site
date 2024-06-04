// This page will display for all invalid site urls

import { useRouteError } from "react-router-dom";
import MultiColouredText from "../components/MultiColouredText";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);


    return(
        <div className="error-page-container">
            <div className="error-page-content-container">
                <h1 className="error-page-title">Unexpected Error!</h1>
                <MultiColouredText 
                    className="error-page-multi-coloured-text"
                    text={["That's ", "not ", "very ", "fun ", "..."]}/>
                <h2 className="error-page-details-prompt">
                    Here are the details:
                </h2>
                <p>
                    <i className="error-page-details-">
                        {error.statusText || error.message}
                    </i>
                </p>
            </div>
        </div>
    );
}