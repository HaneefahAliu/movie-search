import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Series from '../../containers/series';
import SingleSeries from '../../containers/SingleSeries';


const Main = (props) => {
    return ( 
        <Switch>
            <Route exact path="/" component={Series} />
            <Route exact path="/series/:id" component={SingleSeries} />
        </Switch>
     );
}
 
export default Main;