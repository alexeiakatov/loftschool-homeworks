import React, {Fragment, PureComponent} from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = (evt) => {
      const newValue = evt.target.value;
      this.setState({inputValue: newValue});
  };

  createNewRecordByEnter = (evt) => {
    const { value } = evt.target;
    if(evt.key === 'Enter' && value) {
      this.props.saveData(value, ' ');
      this.setState({inputValue: ''});
    }
  };

  toggleRecordComplete = (evt) => {
    this.props.saveData(null, null, evt.target.dataset.todoId);
  };

  createNewRecord = (evt) => {
      const { value } = evt.target.parentElement.querySelector('input');
      if(value) {
          this.props.saveData(value, ' ');
      }
      this.setState({inputValue: ''});
  };

  render() {
    const { renderEmptyRecord, renderRecord } = this;
    const { savedData } = this.props;

    !savedData.length && console.log('emp data');

    return (
       <Card>
           {renderEmptyRecord()}
           {
             savedData.map((record, index) => {
                return renderRecord(record, index)
             })
           }
       </Card>
    )
  }

  renderEmptyRecord = () => {
    return (
        <div className="todo-item todo-item-new">
            <input className="todo-input t-input"
                   placeholder="Введите задачу"
                   value={this.state.inputValue}
                   onChange={this.handleChange}
                   onKeyPress={this.createNewRecordByEnter}
            />
              <span className="plus t-plus"
                    onClick={this.createNewRecord}>+</span>
        </div>
      )
  };

  renderRecord = (record, indexInDataArray)=> {
    return (
        <div key={indexInDataArray} className="todo-item t-todo">
            <p className="todo-item__text">{record.text}</p>
            <span
                className="todo-item__flag t-todo-complete-flag"
                data-todo-id={indexInDataArray}
                onClick={this.toggleRecordComplete}
            >[{record.status}]</span>
        </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
