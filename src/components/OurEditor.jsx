import React, {useEffect} from 'react'

import Editor from "@monaco-editor/react";


const OurEditor = ({ language, displayName, value, onChange, setViewMode}) => {
    useEffect(()=>{

        
    },[])

    function handleChange(e) {
        console.log("hit handle change")
        setViewMode(false)
        onChange(e)
    }
    function handleSubmit(e) {
        e.preventDefault()
        console.log("submission -- this should write to DB ")
    }

    return (
        <div style={{
            display: 'flex', minHeight: 300,width:400, alignContent: "left",
            border: '5px solid rgba(0, 0, 0, 0.05)',
            resize:'horizontal',
            overflow:'hidden'        }}>
            <Editor  
            theme='vs-dark' 
            language={language} value={value} 
            onChange={handleChange} 
            // onClick={setViewMode(false)}
            />
        </div>
    )
}

export default OurEditor