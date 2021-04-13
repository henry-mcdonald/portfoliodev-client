import { useLocation } from 'react-router-dom'


const NoMatch = ({ pageList }) => {
    const location = useLocation();
    const currentPage = location.pathname
    const currentPageVariation1 = location.pathname.substring(1)

    const validLink = pageList.includes(currentPage) || pageList.includes(currentPageVariation1)
    
    const userOutput = <div>Placeholder for user output</div>

    const errorScreen = 
    <div >
        <h1>Hello! {currentPage} page does not exist</h1>
        <button className="NiceButton">Create {currentPage}</button>
        <button className="NiceButton">Take Me Back</button>
    </div >


    return (validLink ? userOutput : errorScreen)
}

export default NoMatch