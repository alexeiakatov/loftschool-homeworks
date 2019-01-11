import React, { Component } from "react";
import { Link } from '../../../node_modules/react-router-dom';

export default class MailList extends Component {

    render() {
        const { data, listType } = this.props;
        const { path } = this.props.match;

        return (
            <div className={`container t-${listType}-list`}>
                {
                    data.map((mail) => {
                        const {id, body} = mail;

                        return (
                            <Link style={{display: 'block', padding: '10px'}}
                                  key={id}
                                  className="link"
                                  to={`${path}/${id}`}>
                                {body.substring(0, 52) + '...'}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
