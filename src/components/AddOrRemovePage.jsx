import {useState} from 'react'

const AddOrRemovePage = ({pageList}) => {


    const [pageNameToCreate, setPageNameToCreate] = useState("")

    const handleCreatePage = () => {

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