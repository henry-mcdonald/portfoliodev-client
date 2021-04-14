import { Link } from "react-router-dom"
import {useState} from 'react'

const EditOrPreview = ({ inPreviewMode }) => {
    const previewMode = (
        <>
                <Link to="/edit">
                    <span></span>
                </Link>
        </>
    )

    const editMode = (
        <>
                <Link to="/preview">
                <span onClick={console.log("should now go to Preview")}></span>
                </Link>
        </>
    )


    return (
        <nav>
            {inPreviewMode ? previewMode: editMode}
        </nav>
    )
}

export default EditOrPreview