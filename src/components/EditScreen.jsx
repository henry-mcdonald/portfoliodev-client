import { useState, useEffect } from 'react'
import OurEditor from './OurEditor'
import Editor from "@monaco-editor/react";


const EditScreen = ({initial_html,initial_css}) => {

    const [html, setHtml] = useState(initial_html)
    const [css, setCss] = useState(initial_css)

    const srcDoc = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    </html>

    `



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
                    <iframe
                        srcDoc={srcDoc}
                        title="output"
                        // sandbox="allow-scripts"
                        frameBorder="1"
                        width="200%"
                        height="100%"
                        style={{resize:"both",overflow:"hidden",backgroundColor:'white'}}

                    />
                </div>
            </div>

        </div>

    )

}

export default EditScreen