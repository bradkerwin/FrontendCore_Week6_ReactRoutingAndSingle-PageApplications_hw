import { Link, useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    setTimeout(()=>{
        navigate("/");
    }, 3000)

    return (
        <div>
            <h2>404 - Not Found</h2>
            <p>Looks like we could not what you were looking for</p>
            <p>Redirecting to Home...</p>
            <p><Link to="/">Go Home!</Link></p>
        </div>
    );
}

export default NotFound;