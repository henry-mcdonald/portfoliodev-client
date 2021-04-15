import { useState, useEffect } from 'react'
import OurEditor from './OurEditor'
import Editor from "@monaco-editor/react";
import DisplayOutput from './DisplayOutput'
import axios from 'axios'

const EditScreen = ({user,currentPage,html,css,setCurrentPage,setHtml,setCss,pageList,
    htmlToRender,cssToRender,setHtmlToRender,setCssToRender,
    viewMode,setViewMode}) => {

    //loading
    //reload

    //timing
    //re-render not occurring
    // const [html, setHtml] = useState(initialHtml)
    // const [css, setCss] = useState(initialCss)


    useEffect(() => {

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
                    <OurEditor language="xml" displayName="HTML" value={html} onChange={setHtml} setViewMode={setViewMode} />
                    <OurEditor language="css" displayName="CSS" value={css} onChange={setCss} setViewMode={setViewMode} />
                </div>
                <div className="pane" style={{border:'5px solid rgba(0, 0, 0, 0.05)'}}>
                    
                    <DisplayOutput 
                    html={html}
                    css={css}
                    user={user}
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                    htmlToRender={htmlToRender}
                    cssToRender={cssToRender}
                    setHtmlToRender={setHtmlToRender}
                    setCssToRender={setCssToRender}
                    initialHeight={600}
                    initialWidth={600}
                    />

                </div>
            </div>


        </div>

    )

}

export default EditScreen