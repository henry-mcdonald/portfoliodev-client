import {
    GoogleLoginButton,
    GithubLoginButton
} from 'react-social-login-buttons'


let SERVER_URL = process.env.REACT_APP_SERVER_URL
SERVER_URL = SERVER_URL.replace('http://','https://')
const Login = props => {

    const handleGoogleClick = () => {
        console.log('Google is clicked!')
        console.log(`${SERVER_URL}`)
        window.location.href = `${SERVER_URL}/auth/google`
    }

    const handleGithubClick = () => {
        console.log('Github is clicked!')
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <GoogleLoginButton onClick={handleGoogleClick} />
            {/* <GithubLoginButton onClick={handleGithubClick} /> */}
        </div>
    )
}

export default Login