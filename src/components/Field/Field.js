import React, { Component } from 'react';

export default class Field extends Component {

    render() {
        const {containerClass,
            labelClass, labelText, labelTextClass,
            inputClass, inputName, inputType,
            errorClass
        } = this.props.config;

        const { inputValue, onInputChange, errorMessage } = this.props;

        return (
                <p className={containerClass}>
                    <label className={labelClass} htmlFor={inputName}>
                        <span className={labelTextClass}>{labelText}</span>
                    </label>

                    <input className={inputClass} type={inputType} name={inputName} onChange={onInputChange} value={inputValue}/>

                    <span className={errorClass}>{errorMessage}</span>
                </p>
            )
    }
}