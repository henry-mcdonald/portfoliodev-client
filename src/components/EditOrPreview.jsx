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

        </>
    )


    return (
        <nav>
            {inPreviewMode ? previewMode: editMode}
        </nav>
    )
}

export default EditOrPreview