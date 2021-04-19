import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';
import DisplayOutput from '../components/DisplayOutput'

const NoMatch_old = ({ pageList, user, setPageList, html, css, setHtml, setCss }) => {
    const [validLink, setValidLink] = useState(false)
    // const [htmlToRender,setHtmlToRender] = useState("")
    // const [cssToRender,setCssToRender] = useState("")
    // const [currentPage, setCurrentPage] = useState("")


    const location = useLocation();
    const currentPage = location.pathname.toLowerCase()
    const currentPageVariation1 = location.pathname.substring(1).toLowerCase()

    const getPageList = async () => {


        const token = localStorage.getItem('jwt')
        const userId = localStorage.getItem('userId')

        const authHeaders = {
            'Authorization': token
        }
        const results = await (await axios.get(`${process.env.REACT_APP_SERVER_URL}/pages/getAllPages/${userId}`, { headers: authHeaders })).data.pageData.pages
        const thePageList = []

        console.log(results)
        for (let i = 0; i < results.length; i++) {
            let name = results[i].name.toLowerCase()
            if (name === currentPage || name === currentPageVariation1) {
                // setHtmlToRender(results[i].html)
                // setCssToRender(results[i].css)
                setHtml(results[i].html)
                setCss(results[i].css)
                setValidLink(true)
            } else {
                console.log(`Page Name is ${results[i].name} which doesn't match ${currentPageVariation1} or ${currentPage}`)
            }
        }


        console.log("current page list at NoMatch,", thePageList)

    }

    useEffect(getPageList, [])


    const htmlToDisplay = `
    <html>
    <body>${html}</body>
    <style>${css}
    </html>
    `
    const userOutput =
        <div
            dangerouslySetInnerHTML={{ __html: html }}
        // style={JSON.parse(css)}
        // onChange={() => {this.refs.thediv.setAttribute("style",css)}}
        // ref="thediv"

        >


            {/* <DisplayOutput 
        html={htmlToRender}
        css={cssToRender}
        
        /> */}




        </div>



    const errorScreen =
        <div >
            <h4> {currentPage} is not a valid path</h4>
        </div >


    return (validLink ? userOutput : errorScreen)
}

export default NoMatch_old