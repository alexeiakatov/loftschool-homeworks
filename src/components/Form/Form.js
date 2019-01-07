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

    onInputChange = (evt) => {
        const fieldName = evt.target.name;
        const newValue = evt.target.value;

        this.setState((oldState, props) => {
            return Object.keys(this.state.errors).length
                ? {[fieldName]: newValue, errors: {}}
                : {[fieldName]: newValue};
        });
    };

    onSubmitClick = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        const errors = this.validateAllFields();
        const isValidate = Object.keys(errors).length ? false : true;
        this.setState((oldState, props) => {return {errors, isValidate}});
    };

    validateAllFields = () => {
        let errors = {};
        for(let key in agentInfo) {
            const infoObj = agentInfo[key];
            if (this.state[key] === '') errors[key] = infoObj.errorEmpty;
            else if (this.state[key] !== infoObj.correctValue) errors[key] = infoObj.errorInvalid;
        }

        return errors;
    };

    render() {
        const { errors, isValidate } = this.state;
        const fields = this.props.fields;

        if (!isValidate) {
            return (
                <form>
                    <h1>Введите свои данные, агент</h1>
                    {
                        fields.map(fieldConfig => {
                                const fieldName = fieldConfig.fieldName;
                                const inputValue = this.state[fieldName];

                                return (<Field
                                    key={fieldName}
                                    config={fieldConfig}
                                    value={inputValue}
                                    onInputChange={this.onInputChange}
                                    errorMessage={errors[fieldName]}
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