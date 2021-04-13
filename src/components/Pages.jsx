import { useEffect, useState } from 'react'
import EditScreen from './EditScreen'
import AddOrRemovePage from '../components/AddOrRemovePage'

const Pages = ({ pageList, setPageList }) => {
    const [currentPage, setCurrentPage] = useState("Main") // default always to main





    const default_html = '<div>\n\t<div>\n\t\t<h1>Level 1</h1>\n\t</div>\n\t<div>\n\t\t<h2>Level 2 </h2>\n\t</div>\n</div>\n<a href="samplelink">Sample Link</a>'
    const default_css = "h1{color:red;}\nh2{color:blue;}"

    console.log("pagelist sis", pageList)

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
            <AddOrRemovePage setPageList={setPageList}/>
            </div>

            <EditScreen currentPage={currentPage} 
            initial_html={default_html} 
            initial_css={default_css}
            setCurrentPage={setCurrentPage}
            ></EditScreen>
        </div>

    )
}

export default Pages