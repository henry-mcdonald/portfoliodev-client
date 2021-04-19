import {useState,useEffect} from 'react'
import axios from 'axios'

const Home = ({user}) => {
    const [projectList,setProjectList] = useState(" Loading...")
    const getCurrentProjects = async() => {
        console.log("current projects did mount")
        const links = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pages/allPublicLinks`)
        console.log(links)
        const data = links.data.allLinks
        const res = data.map((link) => {
            const url =`${window.location.href}${link.publiclink}`
            return <a href={url}
            style={{

            }}>
                {url}
                <br>
                </br>
            </a>
        })
        setProjectList(res)
    }

    useEffect(getCurrentProjects,[])
return(<div style={{padding:'5%'}}>
    <p>
        Portfolio dev is a website to make static websites. 
        You can render HTML \& CSS of your choosing.
        Just go to 'Edit' to edit the main file, make new pages, 
        link them up using {'<a>'} tags, and then click the 'Deploy' tab to deploy to a public url.


        <h3 style={{padding: '0%', fontSize:32, marginTop:40}}>Websites hosted on Portfolio.Dev:</h3>

    </p>
<div style={{padding:'3%'}}>
{projectList}
</div>

</div>)
}
export default Home