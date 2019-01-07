import React from 'react';
import Form from '../Form';

// const fieldValidators = {
//     validateFirstName: (value) => {
//         if (value === '') {
//             return {isError: true, errorMessage: errorMessages.EMPTY_NAME};
//         }
//         else if (value !== correctValues.NAME) {
//             return {isError: true, errorMessage: errorMessages.WRONG_NAME}
//         }
//
//         return {isError: false, errorMessages: ''};
//     },
//     validateLastName: (value) => {
//         if (value === '') {
//             return {isError: true, errorMessage: errorMessages.EMPTY_LAST_NAME};
//         }
//         else if (value !== correctValues.LAST_NAME) {
//             return {isError: true, errorMessage: errorMessages.WRONG_LAST_NAME}
//         }
//
//         return {isError: false, errorMessages: ''};
//     },
//     validatePassword: (value) => {
//         if (value === '') {
//             return {isError: true, errorMessage: errorMessages.EMPTY_PASSWORD};
//         }
//         else if (value !== correctValues.PASSWORD) {
//             return {isError: true, errorMessage: errorMessages.WRONG_PASSWORD}
//         }
//
//         return {isError: false, errorMessages: ''};
//     },
// };

const fields = [
    {fieldName: 'firstName',
        containerClass: 'field',
        labelClass: 'field__label', labelTextClass: 'field-label', labelText: 'Имя',
        inputType: 'text', inputClass: 'field__input field-input t-input-firstname', inputName: 'firstName',
        errorClass: 'field__error field-error t-error-firstname',
        // validator: fieldValidators.validateFirstName
    },
    {fieldName: 'lastName',
        containerClass: 'field',
        labelClass: 'field__label', labelTextClass: 'field-label', labelText: 'Фамилия',
        inputType: 'text', inputClass: 'field__input field-input t-input-lastname', inputName: 'lastName',
        errorClass: 'field__error field-error t-error-lastname',
        // validator: fieldValidators.validateLastName
    },
    {fieldName: 'password',
        containerClass: 'field',
        labelClass: 'field__label', labelTextClass: 'field-label', labelText: 'Пароль',
        inputType: 'password', inputClass: 'field__input field-input t-input-password', inputName: 'password',
        errorClass: 'field__error field-error t-error-password',
        // validator: fieldValidators.validatePassword
    }
];

export default () => {
    return (
            <div className="app-container">
                Homework app
                <Form fields={fields}/>
            </div>
    )
};
