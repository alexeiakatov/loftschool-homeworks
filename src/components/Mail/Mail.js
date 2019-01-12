import React, { Component } from 'react';

export default (props) => {
    const { from, body, to } = props;

    return (
        <div className="container">
            {
                from ? <p className="t-mail-from">From: <b>{from}</b></p>
                    : <p className="t-mail-to">To: <b>{to}</b></p>
            }
            <p className="t-mail-body">{body}</p>
        </div>
    )
};
