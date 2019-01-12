import React, { Component } from 'react';
import MailList from '../MailList';
import {withData} from "../../context/Data";

class InboxList extends Component {

    render() {
        const { inbox } = this.props.data;
        const { path } = this.props.match;

        return (
            <div className="content">
                <h3 className="title">Inbox</h3>
                <MailList path={path} data={inbox} listType="inbox"/>
            </div>
        )
    }
}

export default withData(InboxList);
