import axios from 'axios'
import { Redirect } from "react-router"

const Profile = ({ user }) => {
    console.log(user)
    if(user._id) {

        const makeAnAuthRequest = async() => {
            const token = localStorage.getItem('jwt')
            console.log(token)
            const authHeaders =  {
                'Authorization': token
            }
            const responseFromLockedResource = await axios.get(`${process.env.REACT_APP_SERVER_URL}/exampleResource`,{ headers: authHeaders })
            console.log(responseFromLockedResource)
        }
        makeAnAuthRequest()

        return (
            <div>
                <h1>{user.displayName}'s Profile</h1>
                <img src={user.photos[0].value} alt="profile"/>
                <p>Logged in from {user.provider}</p>

            </div>
        )
    } else {
        return <Redirect to="/login" />
    }
}

export default Profile