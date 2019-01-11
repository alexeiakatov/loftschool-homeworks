import React from 'react';
import { BrowserRouter, Switch } from '../../../node_modules/react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';

const RootRouter = () => (
    <DataProvider>
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path="/" exact />
                    <PrivateRoute path="/app" />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    </DataProvider>
);

export default RootRouter;
