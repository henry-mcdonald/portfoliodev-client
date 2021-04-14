import { useEffect, useState } from 'react'
import EditScreen from './EditScreen'
import AddOrRemovePage from '../components/AddOrRemovePage'
import axios from 'axios'

const Pages = ({ user, pageList, setPageList }) => {
    const [currentPage, setCurrentPage] = useState("Main") // default always to main
    const [initialHtml, setInitialHtml] = useState("")
    const [initialCss, setInitialCss] = useState("")


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
        setInitialHtml(pageData[indexOfPage].html)
        setInitialCss(pageData[indexOfPage].css)
        console.log("API is hit, initial html is:\n", pageData[indexOfPage].html)
        console.log("API is hit, initial css is:\n", pageData[indexOfPage].css)
    }, [currentPage])


    const dropdownOptions = pageList.map((pageName) => {
        return <option value={pageName}
            style={{ fontSize: 18 }}
            key={pageName}
        >{pageName}</option>
    })

    const handleSelect = async (e) => {
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
        setInitialHtml(pageData[indexOfPage].html)
        setInitialCss(pageData[indexOfPage].css)

    }
    const handleEditPage = () => {

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
                initialHtml={initialHtml}
                initialCss={initialCss}
                setCurrentPage={setCurrentPage}
            ></EditScreen>
            <button className="NiceButton" onClick={handleEditPage}>Save Changes</button>
        </div>

    )
}

export default Pages