import React, { Component } from 'react';
import MailList from '../MailList';
import InboxMail from '../InboxMail';
import { Switch, Route } from '../../../node_modules/react-router-dom';
import {withData} from "../../context/Data";

class InboxList extends Component {

    // пример, как передать доп props в компонент, который используешь в Route.
    specifyMailList = (props) => {
        const { inbox } = this.props.data;
        return <MailList {...props} data={inbox} listType="inbox"/>
    };

    render() {
        return (
            <div className="content">
                <h3 className="title">Inbox</h3>

                <Switch>
                    <Route path="/app/inbox" exact brr="someText" component={this.specifyMailList}/>
                    <Route path="/app/inbox/:id" component={InboxMail}/>
                </Switch>
            </div>
        )
    }
}

export default withData(InboxList);
