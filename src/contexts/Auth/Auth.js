import React, {PureComponent} from 'react';

const {Provider, Consumer: AuthConsumer} = React.createContext('');

class AuthProvider extends PureComponent {

    state = {
        email: '',
        authorizeError: '',
        isAuthorized: false
    };

    // здесь д.б. логика авторизации
    // записывает email, очищает ошибку, ставит флаг авторизац = true
    // при неправ данных - запис текст ошибки.
    authorize = (email, password) => {
        if (email === 'stu@dent.com' && password === '123') {
            this.setState({email, authorizeError: '', isAuthorized: true});
            return;
        }

        this.setState({email: '', authorizeError: 'Email или пароль введён не верно', isAuthorized: false});
    };

    // ставит флаг авториз = false
    logout = () => {
        this.setState({email: '', authorizeError: '', isAuthorized: false});
    };

    // предоставляет объект с данными для Provider. Эт объект долж содерж ключи:
    // 'email', 'isAuthorized', 'authorizeError', 'authorize', 'logout'
    getProviderValue = () => {
        const { authorize, logout } = this;
        return {...this.state, authorize, logout};
    };

    render() {
        const {children} = this.props;
        return <Provider value={this.getProviderValue()}>{children}</Provider>;
    }
}

const TestProvider = Provider;

export {AuthProvider, AuthConsumer, TestProvider};
