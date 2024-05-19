// This page will display for all invalid site urls

import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);


    return(
        <div>
            <h1>Unexpected Error!</h1>
            <h2>Here are the details:</h2>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}