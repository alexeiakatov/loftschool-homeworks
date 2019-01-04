import React, { Component } from 'react';

export default class Field extends Component {

    render() {
        console.log('in field: ', this.props);
        return (this.props.config.fieldName !== 'submit')
            ?
            (
                <p className={this.props.config.containerClass}>
                    <label className={this.props.config.labelClass} htmlFor={this.props.config.inputName}>

                        <span className="this.props.config.labelTextClass">
                            {this.props.config.labelText}
                        </span>

                    </label>

                    <input className={this.props.config.inputClass}
                           type={this.props.config.inputType}
                           name={this.props.config.inputName}
                           defaultValue=''
                           onChange={this.props.config.onInputChange}/>

                    <span className={this.props.config.errorClass}>{this.props.errorMessage}</span>
                </p>
            )
            :
            (
                <div className={this.props.config.containerClass}>
                    <input type={this.props.config.inputType}
                           className={this.props.config.inputClass}
                           value={this.props.config.inputValue}
                           onClick={this.props.config.onSubmitClick}/>
                </div>
            )
    }
}