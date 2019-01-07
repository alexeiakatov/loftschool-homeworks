import React from 'react';
import Form from '../Form';

const fields = [
    {fieldName: 'firstName',
        containerClass: 'field',
        labelClass: 'field__label', labelTextClass: 'field-label', labelText: 'Имя',
        inputType: 'text', inputClass: 'field__input field-input t-input-firstname', inputName: 'firstName',
        errorClass: 'field__error field-error t-error-firstname',
    },
    {fieldName: 'lastName',
        containerClass: 'field',
        labelClass: 'field__label', labelTextClass: 'field-label', labelText: 'Фамилия',
        inputType: 'text', inputClass: 'field__input field-input t-input-lastname', inputName: 'lastName',
        errorClass: 'field__error field-error t-error-lastname',
    },
    {fieldName: 'password',
        containerClass: 'field',
        labelClass: 'field__label', labelTextClass: 'field-label', labelText: 'Пароль',
        inputType: 'password', inputClass: 'field__input field-input t-input-password', inputName: 'password',
        errorClass: 'field__error field-error t-error-password',
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
