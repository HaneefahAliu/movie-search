import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

import './style.css';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    onSeriesInputChange = e => {
        this.setState({seriesName: e.target.value, isFetching: true});

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then(json => this.setState({series: json, isFetching:false}))
    }

    render() {
        const {series, seriesName, isFetching} = this.state;

        return (
            <div className="series">
                {/* the length = {this.state.series.length} */}
                <div>
                    <input
                        value={seriesName}
                        type="text" 
                        placeholder="Search for Movie Title"
                        onChange={this.onSeriesInputChange}/>
                </div>
                {
                    series.length === 0 && seriesName.trim() === ''
                }
                {
                    series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>no match found</p>
                }
                {
                    isFetching && <p>loading...</p>
                }
                {
                    !isFetching && <SeriesList list={this.state.series}/>
                }
            </div>
        );
    }
}

export default Series;