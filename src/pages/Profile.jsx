import axios from 'axios'
import { Redirect } from "react-router"
import { useEffect, useState } from 'react'
const Profile = ({ user }) => {
    console.log(user)
    const [alias, setAlias] = useState("")
    const [buttonDisabled, setButtonDisabled] = useState(user.username)
    const [message, setMessage] = useState("")

    const url = window.location.href
    const baseUrl = url.substring(0, url.lastIndexOf('/')) + '/'

    const handleChange = (e) => {
        setAlias(e.target.value)

    }
    useEffect(() => {
        if (alias.includes(" ") || alias.includes('/')) {
            setButtonDisabled(true)
            setMessage("Alias cannot contain spaces or '/' character")
        } else {
            console.log("it's valid")

        }
    }, [alias])
    const handleSubmit = () => {

    }
    let msg = <div></div>
    if (user.username) {
        msg = <div><h1 style={{
            fontSize:22
        }}>Your website is deployed at: {baseUrl + alias}</h1></div>
    } else {
        msg = <div>
                        <div className="inputContainer" style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                margin: '0 auto'
            }}>

                <form >
                    <label style={{ height: 32 }}>
                        <h4 style={{ color: 'red' }}>{message}</h4>
                        <input type="text" name="newFormName"
                            onChange={handleChange}
                        />
                    </label>
                </form>

            </div>
            <button disabled={buttonDisabled} className="NiceButton" onClick={handleSubmit}>Deploy 'Main' page at url:</button>

            <h2 style={{ fontSize: 20 }}>{baseUrl + alias}</h2>

        </div>
    }

    if (user._id) {



        return (



<div>{msg} </div>

        )
    }



    else {
        return <Redirect to="/login" />
    }
}

export default Profile