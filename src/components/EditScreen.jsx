import { useState, useEffect } from 'react'
import OurEditor from './OurEditor'
import Editor from "@monaco-editor/react";
import DisplayOutput from './DisplayOutput'
import axios from 'axios'

const EditScreen = ({user,currentPage,initialHtml,initialCss}) => {

    //loading
    //reload

    //timing
    //re-render not occurring
    const [html, setHtml] = useState(initialHtml)
    const [css, setCss] = useState(initialCss)
    useEffect(() => {

        console.log("Edit Screen Did Mount with initial Html", initialHtml,"and initial CSS", initialCss)
    }, [])


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' ,justifyContent:"left",resize:'both',overflow:"hidden"}}>
                <div style={{
                    display: 'flex', flexDirection: 'row',
                    resize: 'both'   ,     
                    overflow:'auto'        ,
                    minWidth:300
                    }}>
                    <OurEditor language="xml" displayName="HTML" value={html} onChange={setHtml} />
                    <OurEditor language="css" displayName="CSS" value={css} onChange={setCss} />
                </div>
                <div className="pane" style={{border:'5px solid rgba(0, 0, 0, 0.05)'}}>
                    
                    <DisplayOutput 
                    html={html}
                    css={css}
                    />

                </div>
            </div>

        </div>

    )

}

export default EditScreen