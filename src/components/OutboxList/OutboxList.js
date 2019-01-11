import React, { Component } from 'react';
import MailList from '../MailList';
import { Switch, Route } from '../../../node_modules/react-router-dom';
import {withData} from "../../context/Data";
import OutboxMail from "../OutboxMail/OutboxMail";

class OutboxList extends Component {

    specifyMailList = (props) => {
        const { outbox } = this.props.data;
        return <MailList {...props} data={outbox} listType="outbox"/>
    };

    render() {
        return (
            <div className="content">
                <h3 className="title">Outbox</h3>

                <Switch>
                    <Route path="/app/outbox" exact component={this.specifyMailList}/>
                    <Route path="/app/outbox/:id" component={OutboxMail}/>
                </Switch>
            </div>
        )
    }
}

export default withData(OutboxList);