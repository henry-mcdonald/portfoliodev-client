import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import userNotFound from './userNotFound'
import axios from 'axios'
import DisplayOutput from '../components/DisplayOutput'

const NoMatch = () => {

    const [results, setResults] = useState([])
    const [htmlToRender, setHtmlToRender] = useState("Loading")
    const [cssToRender, setCssToRender] = useState("Loading")
    const[indexOfPage, setIndexOfPage] = useState(0)
    const location = useLocation();
    const currentPage = location.pathname.substring(1).toLowerCase()
    const url = window.location.href
    const baseUrl = url.substring(0, url.lastIndexOf('/')) + '/'

    const checkIfIsValid = async () => {
        try {
            let apiResults = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pages/getOtherUsersPages/${currentPage}`)
            apiResults = apiResults.data.pageData.pages
            console.log(apiResults)
            setResults(apiResults)
            setHtmlToRender(apiResults[0].html)
            setCssToRender(apiResults[0].css)
        } catch (err) {
            console.log(err)
            const didNotFindUser = <h1>This User is Not Found!</h1>
        }

    }

    useEffect(checkIfIsValid, [])

    const handleLinkClick = (e) => {
        e.preventDefault()
        console.log(e)
        if (e.target.tagName === "A") {
            const linkTo = e.nativeEvent.target.href
            const linkPath = linkTo.replace(baseUrl, '').toLowerCase()
            for (let i = 0; i < results.length; i++) {
                if (results[i].name.toLowerCase() === linkPath) {
                    setIndexOfPage(i) 
                }

            }



        } else {
            console.log("don't worry,  not a link click")
        }
    }

    useEffect(() => {
        try{
        setHtmlToRender(results[indexOfPage].html)
        setCssToRender(results[indexOfPage].css)
        }
        catch(err){
            console.log(err)

        }
    }, [indexOfPage])




    const htmlToDisplay = `
    <html>
    <body>${htmlToRender}</body>
    <style>${cssToRender}</style>
    </html>
    `
    return (
        <div onClick={handleLinkClick}>

            <div id="userDiv" dangerouslySetInnerHTML={{ __html: htmlToDisplay }}
                style={{
                    resize: "both",
                    overflow: "auto",
                    backgroundColor: 'white',
                    height: 800,
                    width: '100%'

                }}
            ></div>
        </div>

    )
}


export default NoMatch