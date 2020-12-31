import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

const SeriesListitem = ({series}) => (
    <li>
        <Link to={`/series/${series.show.id}`}>
        {series.show.image.medium}
        </Link>
        
    </li>
)

const SeriesList = (props) => {
    return ( 
        <div className="series-list">
            <ul>
                {props.list.map(series => (
                    <SeriesListitem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
     );
}
 
export default SeriesList;