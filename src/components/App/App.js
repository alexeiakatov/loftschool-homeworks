import React from 'react';
import Form from '../Form';

const errorMessages = {
    EMPTY_NAME: 'Нужно указать имя',
    WRONG_NAME: 'Имя указано не верно',
    EMPTY_LAST_NAME: 'Нужно указать фамилию',
    WRONG_LAST_NAME: 'Фамилия указана не верно',
    EMPTY_PASSWORD: 'Нужно указать пароль',
    WRONG_PASSWORD: 'Пароль указан не верно'
};

const correctValues = {
    NAME: 'james',
    LAST_NAME: 'bond',
    PASSWORD: '007'
};

const fieldValidators = {
    validateFirstName: (value) => {
        if (value === '') {
            return {isError: true, errorMessage: errorMessages.EMPTY_NAME};
        }
        else if (value !== correctValues.NAME) {
            return {isError: true, errorMessage: errorMessages.WRONG_NAME}
        }

        return {isError: false, errorMessages: ''};
    },
    validateLastName: (value) => {
        if (value === '') {
            return {isError: true, errorMessage: errorMessages.EMPTY_LAST_NAME};
        }
        else if (value !== correctValues.LAST_NAME) {
            return {isError: true, errorMessage: errorMessages.WRONG_LAST_NAME}
        }

        return {isError: false, errorMessages: ''};
    },
    validatePassword: (value) => {
        if (value === '') {
            return {isError: true, errorMessage: errorMessages.EMPTY_PASSWORD};
        }
        else if (value !== correctValues.PASSWORD) {
            return {isError: true, errorMessage: errorMessages.WRONG_PASSWORD}
        }

        return {isError: false, errorMessages: ''};
    },
};

const fields = [
    {fieldName: 'firstName',
        containerClass: 'field',
        labelClass: 'field__label', labelTextClass: 'field-label', labelText: 'Имя',
        inputType: 'text', inputClass: 'field__input field-input t-input-firstname', inputName: 'firstName',
        errorClass: 'field__error field-error t-error-firstname',
        validator: fieldValidators.validateFirstName
    },
    {fieldName: 'lastName',
        containerClass: 'field',
        labelClass: 'field__label', labelTextClass: 'field-label', labelText: 'Фамилия',
        inputType: 'text', inputClass: 'field__input field-input t-input-lastname', inputName: 'lastName',
        errorClass: 'field__error field-error t-error-lastname',
        validator: fieldValidators.validateLastName
    },
    {fieldName: 'password',
        containerClass: 'field',
        labelClass: 'field__label', labelTextClass: 'field-label', labelText: 'Пароль',
        inputType: 'password', inputClass: 'field__input field-input t-input-password', inputName: 'password',
        errorClass: 'field__error field-error t-error-password',
        validator: fieldValidators.validatePassword
    },
    {fieldName: 'submit',
        containerClass: 'form__buttons',
        inputType: 'submit', inputClass: 'button t-submit', inputValue: 'Проверить'
    }
];

export default () => {
    return (
            <div className="app-container">
                Homework app
                <Form formHeader="Введите свои данные, агент" fields={fields}/>
            </div>
    )
};
