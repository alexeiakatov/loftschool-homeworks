import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = (evt) => {
        const { value, name } = evt.target;
        this.setState({[name]: value});
    };

    handleSubmit = () => {
        const { email, password } = this.state;
        const { authorize } = this.props;

        authorize(email, password);
    };

    render() {
        const { isAuthorized, authError } = this.props;
        const { email, password } = this.state;

        return (
            <div className="form bg t-form">
                <p>
                    <label htmlFor="email">
                        <span className="labelText">Почта</span>
                    </label>
                    <input type="text"
                           name="email"
                           className="input t-input-email"
                           value={email}
                           onChange={this.handleChange}
                    />
                </p>

                <p>
                    <label htmlFor="password">
                        <span className="labelText">Пароль</span>
                    </label>
                    <input type="password"
                           name="password"
                           className="input t-input-password"
                           value={password}
                           onChange={this.handleChange}
                    />
                </p>

                {!isAuthorized ? <p className="error">{authError}</p> : null }

                <div className="buttons">
                    <button
                        className="button t-login"
                        onClick={this.handleSubmit}
                    >Войти</button>
                </div>
            </div>
        )
    }
}

export default withAuth(LoginForm);
