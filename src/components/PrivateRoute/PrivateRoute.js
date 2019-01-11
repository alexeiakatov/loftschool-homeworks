import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from "../LoginForm/LoginForm";
import AppRouter from "../AppRouter/AppRouter";

class PrivateRoute extends Component {

    render() {
        const { isAuthorized, path } = this.props;
        return(
            <Route render={
                (props) => {
                    if (isAuthorized) {
                        return (path !== '/app') ? <Redirect to="/app"/> : <AppRouter/>
                    }
                    return <LoginForm/>;
                }
            }/>
        );
    }
}

export default withAuth(PrivateRoute);
