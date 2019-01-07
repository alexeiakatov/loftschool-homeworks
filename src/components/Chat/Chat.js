import React, {Component} from "react";
import Message from "../Message";
import styles from "./Chat.css";

export default class Chat extends Component {
    state = {
        messages: [],
        messageInput: ''
    };

    sendMessageOnEnter = (evt) => {
        evt.key === 'Enter' &&
        this.setState((oldState, props) => {
                oldState.messages.push({text: oldState.messageInput});
                return {messageInput: ''};
            });
    };

    changeInputMessage = (evt) => {
        this.setState({messageInput: evt.target.value});
    };

    render() {
        const { messages, messageInput } = this.state;
        const { changeInputMessage, sendMessageOnEnter } = this;

        return (
            <div className="chat">
                <div className="message-list messages">
                    {
                        messages.map((el, index) => <Message text={el.text} key={index}/>)
                    }
                </div>
                <input className="input-message"
                       value={messageInput}
                       onChange={changeInputMessage}
                       onKeyPress={sendMessageOnEnter}
                />
            </div>
        );
    }
}