import './Login.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { useEffect, useState } from 'react'

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    const [emailIsValid, setEmailIsValid] = useState()
    const [passwordIsValid, setPasswordIsValid] = useState()

    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        const timeOut = setTimeout(() => {
            console.log('check form is valid')
            setFormIsValid(emailIsValid && passwordIsValid)
            console.log('checked')
        }, 500)
        return () => {
            clearTimeout(timeOut)
        }
    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value)
    }

    const emailValidateHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'))
    }

    const passwordValidateHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.onLogin(enteredEmail, enteredPassword)
    }

    return (
        <Card className='login card'>
            <form onSubmit={submitHandler}>
                <div className={`control ${!emailIsValid ? 'invalid' : ''}`}>
                    <label htmlFor='email'>email</label>
                    <input
                        type='email'
                        id='email'
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={emailValidateHandler}
                    />
                </div>

                <div className={`control ${!passwordIsValid ? 'invalid' : ''}`}>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={passwordValidateHandler}
                    />
                </div>

                <div className='actions'>
                    <Button
                        type='submit'
                        disabled={!formIsValid}
                    >Login</Button>
                </div>
            </form>   
        </Card>
    )
}

export default Login