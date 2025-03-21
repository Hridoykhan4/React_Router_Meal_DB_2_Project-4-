import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();


    return (
        <div className="flex justify-center mx-auto h-screen flex-col items-center">
           <p>{error.status}</p>          
           <h3>{error.statusText}</h3>
            <Link to="/">Go To Home</Link>
        </div>
    );
};

export default ErrorPage;