import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import headerLogo from './header-logo.png'


export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <img src={headerLogo} className="header-logo"></img>
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/quotes">Explore Quotes</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/profile">Profile</Link>
            </li>

            {
                (localStorage.getItem("ql_token") !== null) ?
                    <li className="navbar__item">
                        <Link
                            className="navbar__link"
                            to=""
                            onClick={() => {
                                localStorage.removeItem("ql_token");
                                window.location.href = "/login"; // Redirect to the root URL
                            }}
                        >
                            Logout
                        </Link>
                    </li> :
                    <>
                        <li className="navbar_item">
                            <Link className="navbar__link" to="/login">Login</Link>
                        </li>
                        <li className="navbar_item">
                            <Link className="navbar__link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>

    </div>
    )
}