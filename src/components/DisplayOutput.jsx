

const DisplayOutput = ({ html, css}) => {
    const srcDoc = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    </html>

    `
    return (
        <iframe
            srcDoc={srcDoc}
            title="output"
            // sandbox="allow-scripts"
            frameBorder="1"
            width="200%"
            height="100%"
            style={{ resize: "both", overflow: "hidden", backgroundColor: 'white' }}

        />
    )
}

export default DisplayOutput