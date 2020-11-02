import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Switch>
        <Route to='/saved-news'>
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
