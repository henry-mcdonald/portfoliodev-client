import {useState,useEffect} from 'react'


const Home = ({user}) => {
    const projectList = useState("Loading")
    const getCurrentProjects = () => {
        
    }

    useEffect(getCurrentProjects,[])
return(<div>
Websites hosted on Portfolio.Dev:

{projectList}
</div>)
}
export default Home