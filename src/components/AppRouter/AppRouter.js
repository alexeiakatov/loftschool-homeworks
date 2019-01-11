import React, { Component } from 'react';
import { Switch, Route, Link } from '../../../node_modules/react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';

export default class AppRouter extends Component {

    render() {
        return (
            <div className="container">
                <nav className="nav">
                    <ul className="navList t-nav-list">
                        <li className="navElement">
                            <Link className="link t-link-home" to="/app">Home</Link>
                        </li>
                        <li className="navElement">
                            <Link className="link t-link-inbox" to="/app/inbox">Inbox</Link>
                        </li>
                        <li className="navElement">
                            <Link className="link t-link-outbox" to="/app/outbox">Outbox</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/app" exact component={Home} />
                    <Route path="/app/inbox" component={InboxList} />
                    <Route path="/app/outbox" component={OutboxList} />
                </Switch>
            </div>
        )
    }
}