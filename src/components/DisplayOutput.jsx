import axios from 'axios'
import { useState } from 'react'

const DisplayOutput = ({ html, css, user, viewMode,setViewMode,
    htmlToRender,cssToRender,setHtmlToRender,setCssToRender ,
initialHeight,initialWidth}) => {
    // const srcDoc =  `
    // <html>
    // <body>${previewHtml}</body>
    // <style>${previewCss}</style>
    // <script>{javasript}</script>
    // </html>    ` 





    const url = window.location.href
    const baseUrl = url.substring(0, url.lastIndexOf('/')) + '/'

    const handleLinkClick = async (e) => {
        e.preventDefault()
        console.log(e)
        if (e.target.tagName === "A") {
            try{
            const linkTo = e.nativeEvent.target.href
            const linkPath = linkTo.replace(baseUrl, '').toLowerCase()
            console.log(linkPath)
            console.log(baseUrl)
            const token = localStorage.getItem('jwt')
            const authHeaders = {
                'Authorization': token
            }
            let indexOfPage
            let pageData = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pages/getAllPages/${user._id}`, { headers: authHeaders })//.data.pageData.pages
            pageData = pageData.data.pageData.pages
            console.log(pageData)
            for (let i = 0; i < pageData.length; i++) {
                console.log(pageData[i].name.toLowerCase(), linkPath)
                if (pageData[i].name.toLowerCase() === linkPath) {
                    indexOfPage = i
                }
            }
            console.log(indexOfPage)

            setHtmlToRender(pageData[indexOfPage].html)
            setCssToRender(pageData[indexOfPage].css)
            setViewMode(true)
            console.log(viewMode)

        } catch(err){
            console.log(err)

        }



        } else{
            console.log("don't worry, not a link click")
        }


    }
    const displayHtml = viewMode ? htmlToRender : html
    const displayCss = viewMode ? cssToRender : css

    const htmlToDisplay = `
    <html>
    <body>${displayHtml}</body>
    <style>${displayCss}</style>
    </html>
    `

    return (
        <div onClick={handleLinkClick}>

            <div id="userDiv" dangerouslySetInnerHTML={{ __html: htmlToDisplay }}
                style={{
                    resize: "both",
                    overflow: "auto",
                    backgroundColor: 'white',
                    height:initialHeight,
                    width:initialWidth

                }}
            ></div>



            {/* <a href='www.google.com'>Click Me</a>
        <iframe
            srcDoc={srcDoc}
            title="output"
            // sandbox="allow-same-origin allow-scripts allow-top-navigation"
            frameBorder="1"
            width="100%"
            height="150%"
            style={{ resize: "both", overflow: "hidden", backgroundColor: 'white' }}

        /> */}


        </div>
    )
}

export default DisplayOutput