import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/saved-news'>
          <SavedNewsHeader />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
