import './MainHeader.css'

import Navigation from './Navigation'

const MainHeader = (props) => {
    return (
        <header className="main-header">
            <h1>Page</h1>
            <Navigation onLogout={props.onLogout} />
        </header>
    )
}

export default MainHeader