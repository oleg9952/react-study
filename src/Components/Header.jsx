import React from 'react';

const Header = (props) => {
    return (
        <div className="header">
            <h1>React Notes-Taking App</h1>  
            <div className="header_authorization">
                {
                    props.currentUser === null ? (
                        <ul>
                            <li
                                onClick={props.formTrigger}
                            >Log In</li>
                        </ul>
                    ) : (
                        <ul>
                            <li
                                onClick={props.accountPageTrigger}
                            >Account</li>
                            <li
                                onClick={props.signOut}
                            >Sign out</li>
                        </ul>
                    )
                }    
            </div>
        </div>
    )
}

export default Header;
