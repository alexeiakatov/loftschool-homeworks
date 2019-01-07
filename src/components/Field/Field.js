import React, { Component } from 'react';

export default class Field extends Component {

    render() {
        console.log('field re', this.props.value);
        const {containerClass,
            labelClass, labelText, labelTextClass,
            inputClass, inputName, inputType, onInputChange
        } = this.props.config;

        const inputValue = this.props.value;

        return (
                <p className={containerClass}>
                    <label className={labelClass} htmlFor={inputName}>
                        <span className={labelTextClass}>{labelText}</span>
                    </label>

                    <input className={inputClass} type={inputType} name={inputName} onChange={onInputChange} value={inputValue}/>

                    <span className={this.props.config.errorClass}>{this.props.errorMessage}</span>
                </p>
            )
    }
}