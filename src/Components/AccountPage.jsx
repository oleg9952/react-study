import React from 'react';

const AccountPage = (props) => {
    return (

        <>
            {
                props.accountPageStatus ? (
                    <div className="account_page">
                        <div className="close_account"
                            onClick={props.accountPageTrigger}
                        >
                            <div></div>
                            <div></div>
                        </div>
                        <h1 className="account_title">Welcome { props.currentUser !== null ? props.currentUser : 'useremail' }</h1>
                        <p className="account_details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit omnis nam, ipsa totam, itaque quae quidem facere ipsam beatae iure voluptatem rerum sequi voluptatibus labore! Laboriosam et accusamus fugiat vitae debitis sapiente ad quia omnis consequuntur optio, aspernatur, sint nihil itaque illo. Aut quos nobis veniam porro esse, iusto libero! Eos, nulla! Expedita qui, ipsa voluptas ullam omnis temporibus a, dolorem similique, velit quidem nisi maiores ut quis voluptatem est!</p>
                        <div className="account_chart">
                            Chart comes here!
                        </div>
                    </div>
                ) : ( '' )
            }
        </>

        
    )
}

export default AccountPage;