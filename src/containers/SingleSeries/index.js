import React, { Component } from 'react';

import './style.css';

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response) => response.json())
            .then(json => this.setState({show: json}));
    }

    render() { 
        const {show} = this.state;

        return (  
            <div>
                {
                    show === null && <p>Loading...</p>
                }
                {
                    show !== null 
                    && 
                    <div className="flex">
                        <div className="series-image">
                            <p><img alt="show" src={show.image.original} /></p>
                        </div>
                        <div className="series-description">
                            <h1>{show.name}</h1>
                            <p>Genre: <br /><span>{show.genres}</span></p>
                            <p>Original Release: <br /><span>{show.premiered}</span></p>
                            <p>Running Time: <br /><span>{show.runtime} minutes</span></p>
                            <p>Vote average: <br /><span>{show.rating.average} / 10</span></p>
                            <p>Total episodes: <br /><span>{show._embedded.episodes.length} episodes</span></p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
 
export default SingleSeries;