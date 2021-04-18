import { useEffect, useState } from 'react'
import EditScreen from './EditScreen'
import AddOrRemovePage from '../components/AddOrRemovePage'
import axios from 'axios'

const Pages = ({ user, pageList, setPageList ,html,css,setHtml,setCss,
    htmlToRender,cssToRender,setHtmlToRender,setCssToRender,
viewMode, setViewMode}) => {
    const [currentPage, setCurrentPage] = useState("Main") // default always to main



    let initialPageList = []
    let pageData

    useEffect(async () => {
        const token = localStorage.getItem('jwt')
        const authHeaders = {
            'Authorization': token
        }
        pageData = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pages/getAllPages/${user._id}`, { headers: authHeaders })//.data.pageData.pages
        pageData = pageData.data.pageData.pages
        let indexOfPage
        for (let i = 0; i < pageData.length; i++) {
            initialPageList.push(pageData[i].name)
            if (pageData[i].name === currentPage) {
                indexOfPage = i
            }
        }
        setPageList(initialPageList)
        setHtml(pageData[indexOfPage].html)
        setCss(pageData[indexOfPage].css)
      }, [currentPage])


    const dropdownOptions = pageList.map((pageName) => {
        return <option value={pageName}
            style={{ fontSize: 18 }}
            key={pageName}
        >{pageName}</option>
    })


    const handleEditPage = async() => {
        const token = localStorage.getItem('jwt')
        const authHeaders = {
            'Authorization': token
        }
        const pageData = await axios.post(`${process.env.REACT_APP_SERVER_URL}/pages/${user._id}/${currentPage}`, {content:{html:html,css:css}}, { headers: authHeaders })//.data.pageData.pages
 
    }

    const handleSelect = async (e) => {
        handleEditPage()
        let indexOfPage
        setCurrentPage(e.target.value)
        const token = localStorage.getItem('jwt')
        const authHeaders = {
            'Authorization': token
        }
        pageData = await axios.get(`${process.env.REACT_APP_SERVER_URL}/pages/getAllPages/${user._id}`, { headers: authHeaders })//.data.pageData.pages
        pageData = pageData.data.pageData.pages


        for (let i = 0; i < pageData.length; i++) {
            if (pageData[i].name === e.target.value) {
                indexOfPage = i
            }
        }
        setHtml(pageData[indexOfPage].html)
        setCss(pageData[indexOfPage].css)

    }




    return (

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
                <div class="DropdownAndInfo" >
                    <div class="select">
                        <select name="slct" id="slct"
                            value={currentPage}
                            style={{ fontSize: 24 }}
                            onChange={handleSelect}
                        >
                            {dropdownOptions}
                        </select>
                    </div>
                </div>
                <AddOrRemovePage
                    setPageList={setPageList}
                    user={user}
                    setCurrentPage={setCurrentPage}
                />
                
            </div>

            <EditScreen
                user={user}
                currentPage={currentPage}
                html={html}
                css={css}
                setCurrentPage={setCurrentPage}
                setHtml={setHtml}
                setCss={setCss}
                pageList={pageList}
                htmlToRender={htmlToRender}
                cssToRender={cssToRender}
                setHtmlToRender={setHtmlToRender}
                setCssToRender={setCssToRender}
                viewMode={viewMode}
                setViewMode={setViewMode}
            ></EditScreen>
            <button className="NiceButton" onClick={handleEditPage}>Save Changes</button>

        </div>

    )
}

export default Pages