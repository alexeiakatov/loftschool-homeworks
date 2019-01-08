import React, { PureComponent } from 'react';
import Layout from '../Layout';
import Footer from '../Footer';
import Header from '../Header';
import LoginForm from '../LoginForm';
import Congratulations from '../Congratulations';
import { AuthProvider, AuthConsumer } from '../../contexts/Auth';

class App extends PureComponent {
    render() {
        return (
            <AuthProvider>
                <Layout header={Header} footer={Footer} Consumer={AuthConsumer}>
                    <AuthConsumer>
                        {
                            ({isAuthorized, authorize, authorizeError}) => {
                                return (
                                    isAuthorized
                                    ? <Congratulations/>
                                    : <LoginForm authorize={authorize}
                                                 authorizeError={authorizeError}/>
                                )
                            }
                        }
                    </AuthConsumer>
                </Layout>
            </AuthProvider>
        );
    }
}

export default App;

