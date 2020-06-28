import React from 'react'

const Header = (props) => {
    return (
        <div className="header">
            <div className="content_wrapper">
                <h1 className="logo">Site Title</h1>
                <p className="status">
                    { props.signInStatus ? 'Signed in' : 'Signed Out' }
                </p>
                {
                  props.signInStatus ? (
                    <ul className="nav">
                        <li
                            onClick={props.userAccountDetails}
                            style={{ marginRight: '25px' }}
                        >{ `${props.currentUser}` }</li>
                        <li
                            onClick={props.signOutUser}
                        >Sign Out</li>
                    </ul>
                  ) : (
                    <ul className="nav">
                        <li
                            onClick={props.signIn}
                        >Sign In</li>
                        <li
                            onClick={props.signUp}
                        >Sign Up</li>
                    </ul>
                  )
                }
            </div>
        </div>
    )
}

export default Header
