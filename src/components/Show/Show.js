import React, { Component } from 'react';
import styles from "./Show.css";
import getShowInfo from "../../api.js";

export default class Show extends Component {
    /* data.name,
    *  data.image.medium,
    *  data.genres,
    *  data.summary */
    state = {
        showId: null,
        data: null
    };

    static getDerivedStateFromProps = (nextProps, prevState) => {
        return nextProps.showId === prevState.showId ? null : {showId: nextProps.showId};
    };

    setReceivedData = (responseJson) => {
        this.setState((oldState, props) => {
            oldState.data = responseJson;
            return oldState
        });
    };

    componentDidUpdate = (prevProps, prevState) => {
        const propsShowId = this.props.showId;

        prevState.showId !== propsShowId &&
        getShowInfo(propsShowId)
            .then(
                (responseJson) => {this.setReceivedData(responseJson)}
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

