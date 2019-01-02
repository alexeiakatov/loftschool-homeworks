import React, {Component} from "react";
import Message from "../Message";
import styles from "./Chat.css";

export default class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    };

    sendMessageOnEnter = (evt) => {
        if (evt.key === 'Enter') {
            this.setState((oldState, props) => {
                oldState.messages.push({text: oldState.messageInput});
                oldState.messageInput = '';
                return oldState;
            });
        }
    };

    changeInputMessage = (evt) => {
        const newValue = parseInt(evt.target.value, 10);

        this.setState((oldState, props) => {
            oldState.messageInput = newValue;
            return oldState;
        });
    };

    render() {
        return (
            <div className="chat">
                <div className="message-list messages">
                    {
                        this.state.messages.map((el, index) => {
                                    return <Message text={el.text} key={index}/>})
                    }
                </div>
                <input className="input-message"
                       value={this.state.messageInput}
                       onChange={this.changeInputMessage}
                       onKeyPress={this.sendMessageOnEnter}
                />
            </div>
        );
    }
}