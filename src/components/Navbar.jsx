import { Link } from "react-router-dom"

const Navbar = ({ user, handleLogout }) => {
    const loggedIn = (
        <div>
            <li>
                <Link to="/edit" user={user}> Edit</Link>
            </li>
            <li>
                <Link to="/preview" user={user}>Preview</Link>
            </li>
            <li>
                <Link to="/profile" user={user}>Deploy</Link>
            </li>
            <li>
                <Link to="/">
                    <span onClick={handleLogout} >Logout</span>
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
                    <Link to="/" user={user}>Home </Link>
                </li>
                {user._id ? loggedIn : loggedOut}
            </ul>
        </nav>
    )
}

export default Navbar