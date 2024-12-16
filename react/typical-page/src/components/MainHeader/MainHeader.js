import './MainHeader.css'

import Navigation from './Navigation'

const MainHeader = (props) => {
    return (
        <header className="main-header">
            <h1>Page</h1>
            <Navigation loggedIn={props.isAuthenticated} onLogout={props.onLogout} />
        </header>
    )
}

export default MainHeader