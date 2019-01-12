import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from "../LoginForm/LoginForm";
import AppRouter from "../AppRouter/AppRouter";

class PrivateRoute extends Component {

    isNeedRedirect = (pathname) => {
        return (pathname === '/' || pathname.indexOf('/app') !== 0);
    };

    render() {
        const { isAuthorized } = this.props;

        return(
            <Route render={
                (props) => {
                    const { pathname } = props.location;

                    if (isAuthorized) {
                        return this.isNeedRedirect(pathname) ? <Redirect to="/app" /> : <AppRouter/>;
                    }

                    return <LoginForm/>;
                }
            }/>
        );
    }
}

export default withAuth(PrivateRoute);
