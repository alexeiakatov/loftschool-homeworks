import React, { Component } from 'react';
import styles from "./Show.css";
import * as fetchApi from "../../api.js";

export default class Show extends Component {
    /* data.name,
    *  data.image.medium,
    *  data.genres,
    *  data.summary */
    state = {
        showId: null,
        data: null
    };

    setReceivedData = (responseJson, showId) => {
        this.setState((oldState, props) => {
            return {
                showId: showId,
                data: responseJson
            };
        });
    };

    componentDidUpdate = (prevProps, prevState) => {
        const propsShowId = this.props.showId;

        propsShowId !== this.state.showId &&
        fetchApi.getShowInfo(propsShowId)
            .then(
                (responseJson) => {this.setReceivedData(responseJson, propsShowId)}
            );
    };

    render() {
        const data = this.state.data;

        return (
            data ?
                <div className="show">
                    <img className="show-image"
                         src={data.image.medium}
                         alt={data.name}/>
                    <div>
                        <h2 className="show-label t-show-name">{data.name}</h2>
                        <p className="show-text t-show-genre"><b>Жанр: </b>{data.genres.join(', ')}</p>
                        <p className="show-text t-show-summary" dangerouslySetInnerHTML={{__html: data.summary}}></p>
                    </div>
                </div>
                : <p className="show-inforation t-show-info">Шоу не выбрано</p>
        )
    }
}

