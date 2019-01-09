import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (displayName, initialArray) => {

    return (WrappedComponent) => {

        return class extends Component {
            static displayName = displayName;

            localStorageKey = 'toDoAppData';

            state = {
                data: initialArray
            };

            constructor() {
                super();
                let { data } = this.state;
                const localStorageData = load(this.localStorageKey);
                if (localStorageData) {
                    this.state.data = data.concat(localStorageData);
                }
            }

            saveData = (text, status, todoId) => {
                let newData;

                if (todoId) {
                    const record = this.state.data[todoId];
                    record.status = (record.status === ' ') ? 'x' : ' ';
                    newData = [...this.state.data];
                } else {
                    newData = [...this.state.data, {text, status}];
                }
                save(this.localStorageKey, newData);

                this.setState(state => {
                    return {data: newData}
                });
            };

            render() {
                return <WrappedComponent saveData={this.saveData} savedData={this.state.data}/>
            }
        }
    }
};

export default withLocalstorage;
