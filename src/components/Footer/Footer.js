import React, {PureComponent} from 'react';
import {AuthConsumer} from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {

    render() {
        const {isAuthorized, email } = this.props;

        return (
            <footer className="footer">
                <p className="header__title section-title">Footer</p>

                {
                    isAuthorized &&
                    <p className="footer-message t-footer">Вы вошли как {email}</p>
                }
            </footer>
        )
    }
}

export default Footer;
