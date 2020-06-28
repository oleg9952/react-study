import React, { useState, useRef } from 'react';

const Form = (props) => {
    const [ switcher, setSwitcher ] = useState(false);

    // ------- LOG IN -------

    let logInEmail = useRef('');
    let logInPassword = useRef('');

    const handleLogIn = (e) => {
        e.preventDefault()
        props.logIn(logInEmail.current.value, logInPassword.current.value)
        setTimeout(() => {
            logInEmail.current.value = '';
            logInPassword.current.value = '';
        }, 500)
    }

    // ------- REGISTER -------

    let registerEmail = useRef(null);
    let registerPassword = useRef(null);

    const handleRegister = (e) => {
        e.preventDefault()
        props.registerNewAccount(registerEmail.current.value, registerPassword.current.value)
        setTimeout(() => {
            registerEmail.current.value = '';
            registerPassword.current.value = '';
        }, 500)
    }

    const switchBetweenForms = () => {
        setSwitcher(!switcher)
    }

    return (
        <div className={ props.formStatus ? 'form_bg active' : 'form_bg' }>
            <div className="close_form" onClick={props.formTrigger}>
                <div></div>
                <div></div>
            </div>
            <div className="form">
                <div className="forms_holder"
                    style={{ left: switcher ? '-100%' : '0%' }}
                >
                    <form className="form_item" onSubmit={handleLogIn}>
                        <div className="form_header">
                            <h1 className="form_title">Log In</h1>
                        </div>
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="email"
                            ref={logInEmail}
                            required
                        />
                        <input 
                            type="password"
                            placeholder="Enter your password"
                            className="password"
                            ref={logInPassword}
                            required
                        />
                        <button type="submit" className="form_btn">Log in</button>
                        <p className="switch_forms"
                            onClick={switchBetweenForms}
                        >Don't have an account yet?</p>
                    </form>
                    <form className="form_item" onSubmit={handleRegister}>
                        <div className="form_header">
                            <h1 className="form_title">Register</h1>
                        </div>
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="email"
                            ref={registerEmail}
                            required
                        />
                        <input 
                            type="password"
                            placeholder="Enter your password"
                            className="password"
                            ref={registerPassword}
                            required
                        />
                        <button type="submit" className="form_btn">Register</button>
                        <p className="switch_forms"
                            onClick={switchBetweenForms}
                        >Go back to Log In</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;
