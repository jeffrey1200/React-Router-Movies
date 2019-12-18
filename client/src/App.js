import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import {Switch,Route} from "react-router-dom"
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    
    <div>
      <SavedList list={savedList} />
      <Switch>
      <Route exact path = '/'><MovieList/></Route>
      <Route path = '/movies/:movieID'>
        <Movie/> 
        </Route>
      </Switch>
    </div>
    
  );
};

export default App;
