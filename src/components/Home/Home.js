import React, { Component } from 'react';

export default class Home extends Component {

    render() {
        return (
            <div className="container">
                <div className="content">
                    <h3 className="title">Home</h3>

                    <div className="Home_container">
                        <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
                    </div>
                </div>
            </div>
        )
    }
}