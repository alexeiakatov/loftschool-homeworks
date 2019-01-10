import React, {Fragment, PureComponent} from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
    state = {
        inputValue: ''
    };

    getId() {
        const {savedData} = this.props;
        const biggest = savedData.reduce((prevResult, record) => Math.max(prevResult, record.todoId), 0);
        return biggest + 1;
    }

    handleChange = (evt) => {
        const { value } = evt.target;
        this.setState({inputValue: value});
    };

    createNewRecordByEnter = (evt) => {
        const { value } = evt.target;
        const { key } = evt;
        const { saveData } = this.props;

        if (key === 'Enter' && (value !== '')) {
            saveData({value, todoId: this.getId()});
            this.setState({inputValue: ''});
        }
    };

    toggleRecordComplete = (evt) => {
        const { saveData } = this.props;
        const { todoId } = evt.target.dataset;
        saveData({todoId, isToggle: true});
    };

    createNewRecord = (evt) => {
        const { saveData } = this.props;
        const { value } = evt.target.parentElement.querySelector('input');

        if (value !== '') {
            saveData({value, todoId: this.getId()});
        }
        this.setState({inputValue: ''});
    };

    render() {
        const { savedData } = this.props;

        return (
            <Card>
                {this.renderEmptyRecord()}
                {
                    savedData.map((record) => {

                        return this.renderRecord(record)
                    })
                }
            </Card>
        )
    }

  renderEmptyRecord = () => {
        const { inputValue } = this.state;
    return (
        <div className="todo-item todo-item-new">
            <input className="todo-input t-input"
                   placeholder="Введите задачу"
                   value={inputValue}
                   onChange={this.handleChange}
                   onKeyPress={this.createNewRecordByEnter}
            />
              <span className="plus t-plus"
                    onClick={this.createNewRecord}>+</span>
        </div>
      )
  };

  renderRecord = (record)=> {
      const { value, status, todoId } = record;
      return (
          <div key={todoId} className="todo-item t-todo">
              <p className="todo-item__text">{value}</p>
              <span
                  className="todo-item__flag t-todo-complete-flag"
                  data-todo-id={todoId}
                  onClick={this.toggleRecordComplete}
              >[{status}]</span>
          </div>
      );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
