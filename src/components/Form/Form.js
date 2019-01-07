import React, { Component } from "react";
import styles from "./Form.css";
import Field from "../Field";
import bondImage from "./assets/bond_approve.jpg";

const agentInfo = {
    firstName: {
        correctValue: 'james',
        errorInvalid: 'Имя указано не верно',
        errorEmpty: 'Нужно указать имя'
    },
    lastName: {
        correctValue: 'bond',
        errorInvalid: 'Фамилия указана не верно',
        errorEmpty: 'Нужно указать фамилию'
    },
    password: {
        correctValue: '007',
        errorInvalid: 'Пароль указан не верно',
        errorEmpty: 'Нужно указать пароль'
    }
};

export default class Form extends Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        errors: {},
        isValidate: false
    };

    constructor(props) {
        super(props);
        this.props.fields.forEach(el => el.onInputChange = this.onInputChange);
    }

    hasErrorStatuses = () => {
        let hasErrors = [];

        for (let fieldName in this.state) {
            if (this.state[fieldName].isError) {
                hasErrors.push(fieldName);
            }
        }
        return hasErrors.length ? hasErrors : null;
    };

    clearErrorStatuses = (hasErrors) => {
            this.setState((oldState, props) => {
                hasErrors.forEach((fieldName) => {
                    oldState[fieldName].isError = false;
                    oldState[fieldName].errorMessage = '';
                    });
                    return oldState;
                });
    };

    onInputChange = (evt) => {
            const fieldName = evt.target.name;
            const newValue = evt.target.value;

            // const hasErrors = this.hasErrorStatuses();

            // нормально ли так делать?
            // hasErrors && this.clearErrorStatuses(hasErrors);

        this.setState((oldState, props) => {
            return {[fieldName]: newValue};
            // oldState[fieldName].value = newValue;
            // return oldState;
        });
    };

    onSubmitClick = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        this.validateAllFields() && this.setState((oldState, props) => oldState.isBond = true);
    };

    validateAllFields = () => {
        let isValidCredentials = true;

        for(const fieldName in this.state) {
            const statusObject = this.state[fieldName];
            const validationResult = statusObject.validator(statusObject.value);
            if (validationResult.isError) {
                isValidCredentials = false;
                this.setState((oldState, props) => {
                    oldState[fieldName].isError = validationResult.isError;
                    oldState[fieldName].errorMessage = validationResult.errorMessage;
                    return oldState;
                    });
            }
        }
        return isValidCredentials;
    };

    render() {
        const { firstName, lastName, password, errors } = this.state;
        const fields = this.props.fields;

        if (!this.state.isBond) {
            return (
                <form>
                    <h1>Введите свои данные, агент</h1>
                    {
                        fields.map(el => {
                                const inputValue = this.state[el.fieldName];

                                return (<Field
                                    key={el.fieldName}
                                    config={el}
                                    value={inputValue}
                                    // isError={statusObject.isError}
                                    // errorMessage={statusObject.errorMessage}
                                        />)
                        })
                    }
                    <div className="form__buttons">
                        <input type="submit"
                               className="button t-submit"
                               value="Проверить"
                               onClick={this.onSubmitClick}/>
                    </div>
                </form>
            );
        }
        else {
            return <img src={bondImage} className="t-bond-image"/>;
        }
    } //render
}//class