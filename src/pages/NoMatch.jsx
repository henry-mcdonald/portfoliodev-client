import { useLocation } from 'react-router-dom'


const NoMatch = (props) => {
    console.log("props in this case", props)
    const location = useLocation();
    console.log(location.pathname);
    return(<div>
        <h1>Hello! That page does not exist</h1>
        <button className="NiceButton">Create This Page</button>
        <button className="NiceButton">Take Me Back</button>
        <span>Path : {location.pathname}</span>
    </div>)
}

export default NoMatch