import React, {Fragment} from "react";
import ReactDOM from 'react-dom'

import Card from './Card'
import Button from './Button'

import './Error.css'

function BackDrop() {
    return (
        <div className="backdrop"></div>
    )
}

function ModalOverlay(props) {
    return (
        <Card className='modal'>
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="footer">
                <Button onClick={props.onConfirm}>OK</Button>
            </footer>
        </Card>
    )
}

function Error(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm} />,
                document.querySelector('#backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                title={props.title}
                message={props.message}
                onConfirm={props.onConfirm}
                />,
                document.querySelector('#overlay-root')
            )}
        </Fragment>
    )
}

export default Error