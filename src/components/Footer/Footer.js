import React, {PureComponent} from 'react';
import {AuthConsumer} from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {

    render() {
        return <AuthConsumer>
            {
                ({isAuthorized, email}) => {
                    if(isAuthorized) {
                        return (
                            <p className="footer-message t-footer">Вы вошли как {email}</p>
                        )
                    }
                }
            }
        </AuthConsumer>
    }
}

export default Footer;
