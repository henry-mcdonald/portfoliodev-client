import '../src/index.css'
import { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Profile from './pages/Profile'
import SaveToken from './pages/SaveToken'
import jwt from 'jsonwebtoken'
import Home from './pages/Home'
import PreviewContainer from './components/PreviewContainer'
import EditOrPreview from './components/EditOrPreview'
import Pages from './components/Pages'
import NoMatch from './components/NoMatch'
import DisplayOutput from './components/DisplayOutput'



const App = () => {

    const [user, setUser] = useState({_id:null})
    const [inPreviewMode] = useState(true)
    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")
    const [htmlToRender, setHtmlToRender] = useState("")
    const [cssToRender, setCssToRender] = useState("")
    const [viewMode, setViewMode] = useState(false)


    const [pageList, setPageList] = useState([])
    // Problem: When we refresh the page, it logs us out.. EVEN THOUGH
    // We have a token!
    // Solution: useEffect to log in the user from the saved token
    useEffect(() => {
        // Check if there's a token in local storage..
        const token = localStorage.getItem('jwt')
        // If there's a token - decode it and use it as the user state
        try {
            if (token) {
                // Attempt to decode that token
                const user = jwt.decode(token)
                // If that token is expired... it'll throw an error
                // To the 'catch' block
                // console.log('this is the user', user)
                setUser(user)
            }
        } catch (err) {
            console.log(err)
            console.log('The token is expired!!!')
            localStorage.removeItem('jwt')
            setUser(null)
        }
    }, [])

    const handleLogout = () => {
        // log out the user by deleting it's JWT
        if (localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt')
            // and removing the user state variable
            setUser(null)
        }
    }

    return (
        <div >


            <Router>
                <EditOrPreview inPreviewMode={inPreviewMode} />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Navbar user={user} handleLogout={handleLogout} />
                            <Home user={user}/>
                        </Route>
                        <Route path="/profile">
                            <Navbar user={user} handleLogout={handleLogout} />

                            <Profile user={user} />
                        </Route>
                        <Route path="/login">
                            <Navbar user={user} handleLogout={handleLogout} />

                            <Login />
                        </Route>
                        <Route path='/saveToken'>
                            <SaveToken setUser={setUser} />
                        </Route>
                        <Route exact path='/edit'
                            render={(props) =>
                                < >
                                    <Navbar user={user} handleLogout={handleLogout} />

                                    <Pages {...props}
                                    user={user}
                                        pageList={pageList}
                                        setPageList={setPageList}
                                        html={html}
                                        css={css}
                                        setHtml={setHtml}
                                        setCss={setCss}
                                        htmlToRender={htmlToRender}
                                        cssToRender={cssToRender}
                                        setHtmlToRender={setHtmlToRender}
                                        setCssToRender={setCssToRender}
                                        viewMode={viewMode}
                                        setViewMode={setViewMode}

                                    />
                                </>
                            } />



                        <Route exact path='/preview'>
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
                    initialHeight={800}
                    initialWidth='100%'
                    />
                        </Route>
                        <Route path="*" > 

                        <NoMatch user={user}/>
                            {/* <NoMatch_old 
                            pageList={pageList}
                            user={user}
                            setPageList={setPageList}
                            html={html}
                            css={css}
                            setHtml={setHtml}
                            setCss={setCss}

                            /> */}

                        </Route>
                    </Switch>

                </div>

            </Router>
        </div>

    )
}

export default App