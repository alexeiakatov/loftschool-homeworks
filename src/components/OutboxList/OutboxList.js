import React, { Component } from 'react';
import MailList from '../MailList';
import {withData} from "../../context/Data";

class OutboxList extends Component {

    render() {
        const { outbox } = this.props.data;
        const { path } = this.props.match;

        return (
            <div className="content">
                <h3 className="title">Outbox</h3>
                <MailList path={path} data={outbox} listType="outbox"/>
            </div>
        )
    }
}

export default withData(OutboxList);