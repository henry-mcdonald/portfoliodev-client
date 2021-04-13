import { useEffect } from "react"
import { Redirect, useLocation } from "react-router"
import jwt from 'jsonwebtoken'

const SaveToken = ({ setUser }) => {
    const query = new URLSearchParams(useLocation().search)
    const token = query.get('token')
    
    // https://reactrouter.com/web/example/query-parameters
    useEffect(() => {
        // grabs the token from the query param and saves it to localstorage
        console.log('token is:', token)
        localStorage.setItem('jwt', token)
        // const authHeaders = {
        // headers: {'Authorization': token}
        // }

        // localStorage.setItem('authHeaders', authHeaders)

        // We decode the user from the JWT
        const user = jwt.decode(token)

        // save that user to the app state 
        setUser(user)
    }, [setUser, token])

    if(token) {
        return <Redirect to="/" />
    } else {
        return <Redirect to="/login" />
    }
}

export default SaveToken