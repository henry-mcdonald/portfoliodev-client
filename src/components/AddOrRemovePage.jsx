import {useState} from 'react'
import axios from 'axios'

const AddOrRemovePage = ({user,setPageList,setCurrentPage}) => {


    const [pageNameToCreate, setPageNameToCreate] = useState("")

    const handleCreatePage = async(e) => {
        e.preventDefault()
        const token = localStorage.getItem('jwt')
        const authHeaders =  {
            'Authorization': token
        }
        const results = await (await axios.get(`${process.env.REACT_APP_SERVER_URL}/pages/${user._id}/${pageNameToCreate}/new`,{headers:authHeaders})).data.pageData.pages
        const newPageList = []

        setPageList(newPageList)
        setCurrentPage(pageNameToCreate)
        
    }
    return(
        <div style={{display:'flex',flexDirection:'row'}}>
        <form style={{
            display:'flex',
            justifyContent:'center'
        }}>
            <label>
            <input type="text" name="newFormName" 
            onChange={e => setPageNameToCreate(e.target.value)}
            style={{height:'67%',
            fontSize:22
        
        }}/>
            </label>
        </form>
        <button className="NiceButton" onClick={handleCreatePage}>Create Page</button>

        <button className="NiceButton">Delete Current Page</button>
        </div>
    )
}

export default AddOrRemovePage;