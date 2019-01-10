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

            saveData = (dataObj) => {
                const { value, todoId, isToggle } = dataObj;
                const { data } = this.state;

                let newData;
                if (isToggle) {
                    const index = data.reduce((prevRecord, curRecord, index) => {
                                return (curRecord.todoId.toString() === todoId) ? index : prevRecord;
                            },
                            null);
                    const record = data[index];
                    record.status = (record.status === ' ') ? 'x' : ' ';
                    newData = [...data];
                } else {
                    newData = [...data, {value, status: ' ', todoId}];
                }
                save(this.localStorageKey, newData);

                this.setState(state => {
                    return {data: newData}
                });
            };

            render() {
                const { data } = this.state;
                return <WrappedComponent saveData={this.saveData} savedData={data}/>
            }
        }
    }
};

export default withLocalstorage;
