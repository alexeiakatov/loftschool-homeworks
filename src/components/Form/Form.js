import React, { Component } from "react";
import styles from "./Form.css";
import Field from "../Field";
import bondImage from "./assets/bond_approve.jpg";

export default class Form extends Component {
    state = {};

    constructor(props) {
        super(props);
        /* в state создаем статусные объекты в которых будем:
         *   отслеживать значения в дочерних инпутах,
         *   сохранять состояние ошибки и сообщение при ошибке.
         *   хранить функцию-валидатор для конкретного инпута
         * так же в констр-ре добавяем в конфигур объект (предназначенный) для полей формы обработчики из родительского
         * компонента.*/
        for(let fieldConfig of this.props.fields){
            const fieldName = fieldConfig.fieldName;
            if (fieldName !== 'submit') {
                // создаем запись о статусе потомка в родитльском компоненте
                this.state[fieldName] = {isError: false, errorMessage: '', value: '', validator: fieldConfig.validator};
                // добавляем конфигурац объекту предназ-му для поля-потомка обработчик ввода в input.
                fieldConfig.onInputChange = this.onInputChange;
            } else {
                fieldConfig.onSubmitClick = this.onSubmitClick;
            }
        }
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

            const hasErrors = this.hasErrorStatuses();

            // нормально ли так делать?
            hasErrors && this.clearErrorStatuses(hasErrors);

        this.setState((oldState, props) => {
            oldState[fieldName].value = newValue;
            return oldState;
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
        if (!this.state.isBond) {
            return (
                <form>
                    <h1>Введите свои данные, агент</h1>
                    {
                        this.props.fields.map(el => {
                            if (el.fieldName !== 'submit') {
                                const statusObject = this.state[el.fieldName];
                                return (<Field
                                    key={el.fieldName}
                                    config={el}
                                    isError={statusObject.isError}
                                    errorMessage={statusObject.errorMessage}/>)

                            } else {
                                return (
                                    <Field key={el.fieldName} config={el}/>
                                )
                            }

                        })
                    }
                </form>
            );
        }
        else {
            return <img src={bondImage} className="t-bond-image"/>;
        }
    } //render
}//class