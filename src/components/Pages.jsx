import { useEffect, useState } from 'react'
import EditScreen from './EditScreen'
import AddOrRemovePage from '../components/AddOrRemovePage'
import axios from 'axios'

const Pages = ({user, pageList, setPageList }) => {
    const [currentPage, setCurrentPage] = useState("Main") // default always to main




    let initial_html
    let initial_css
    let pageData
    const getPageData = async() => {
        const token = localStorage.getItem('jwt')
        const authHeaders =  {
            'Authorization': token
        }
        pageData = await (await axios.get(`${process.env.REACT_APP_SERVER_URL}/pages/getAllPages/${user._id}`,{ headers: authHeaders })).data.pageData.pages
        let indexOfPage
        for(let i=0;i<pageData.length;i++){
            if(pageData[i].name === currentPage){
                indexOfPage = i
            }


        }
        initial_html = pageData[indexOfPage].html
        initial_css = pageData[indexOfPage].css
    
    }

    useEffect(getPageData,[currentPage])

    getPageData()




    const default_html = '<div>\n\t<div>\n\t\t<h1>Level 1</h1>\n\t</div>\n\t<div>\n\t\t<h2>Level 2 </h2>\n\t</div>\n</div>\n<a href="samplelink">Sample Link</a>'
    const default_css = "h1{color:red;}\nh2{color:blue;}"


    const dropdownOptions = pageList.map((pageName) => {
        return <option value={pageName} 
        style={{fontSize:18}}
        >{pageName}</option>
    })

    
    return (

        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{display:'flex',flexDirection:'row', alignItems:'stretch'}}>
            <div class="DropdownAndInfo" >
                <div class="select">
                    <select name="slct" id="slct" style={{fontSize:24}} onChange={e => setCurrentPage(e.target.value)}>
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
            initial_html={initial_html} 
            initial_css={initial_css}
            setCurrentPage={setCurrentPage}
            ></EditScreen>
            <button className="NiceButton">Save Changes</button>
        </div>

    )
}

export default Pages