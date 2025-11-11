import './PageNotFound.css'

const PageNotFound = (text: string = 'Page/Source Not found') => {
    return(
        <div id='error'>
            <h1>404 Page Not Found</h1>
            <p>{text}</p>
        </div>
    )
}

export default PageNotFound