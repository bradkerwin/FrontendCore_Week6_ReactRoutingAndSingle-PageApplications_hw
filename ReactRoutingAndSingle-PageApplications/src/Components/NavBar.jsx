import { NavLink, Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        <Link to="/">
        </Link>
        <nav className="clearfix">
            <NavLink to="/characters" activeClassName='active'>Check Out Your Favorite Marvel Characters!</NavLink>
            <br></br>
            <NavLink to="/comics" activeClassName='active'>Check Out the Comics!</NavLink>
            <br></br>
            <Link to={`/`}>Homepage</Link>
        </nav>
        </>
    )
}


export default NavBar;