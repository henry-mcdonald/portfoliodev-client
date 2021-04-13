import { Link } from "react-router-dom"

const Navbar = ({ user, handleLogout }) => {
    const loggedIn = (
        <div>
            <li>
                <Link to="/edit">Edit</Link>
            </li>
            <li>
                <Link to="/preview">Preview</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/">
                    <span onClick={handleLogout}>Logout</span>
                </Link>
            </li>
        </div>
    )

    const loggedOut = (
        <>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </>
    )


    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {user ? loggedIn : loggedOut}
            </ul>
        </nav>
    )
}

export default Navbar