import React from 'react';
import { BrowserRouter } from '../../../node_modules/react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';

const RootRouter = () => (
    <DataProvider>
        <AuthProvider>
            <BrowserRouter>
                    <PrivateRoute path="*"  />
            </BrowserRouter>
        </AuthProvider>
    </DataProvider>
);

export default RootRouter;
