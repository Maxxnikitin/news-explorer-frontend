import React from 'react';
import './App.css';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import CreateUserPopup from '../CreateUserPopup/CreateUserPopup';
import RegOkPopup from '../RegOkPopup/RegOkPopup';
import { getToken } from '../../utils/auth';
import ProtectedRoute from '../ProptectedRoute/ProptectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const token = localStorage.getItem('token');
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isCreateUserPopupOpen, setIsCreateUserPopupOpen] = React.useState(false);
  const [isRegOkPopupOpen, setIsRegOkPopupOpen] = React.useState(false);
  const [isMobileMenuPopupOpen, setIsMobileMenuPopupOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(!!token);
  const [loggedName, setLoggedName] = React.useState('');
  const [keyword, setKeyword] = React.useState('');

  // const overlay = document.querySelector('.popup__overlay');

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsCreateUserPopupOpen(false);
    setIsRegOkPopupOpen(false);
    remEventListeners();
  }

  function closeByEsc(evt) {
    if (evt.key ===  'Escape') {
      closeAllPopups()
    }
  }

  function handleLoginClick() {
    closeAllPopups();
    setIsLoginPopupOpen(true);
    setEventListeners();
  }

  function handleCreateUserClick() {
    closeAllPopups();
    setIsCreateUserPopupOpen(true);
    setEventListeners();
  }

  function handleRegOkClick() {
    closeAllPopups();
    setIsRegOkPopupOpen(true);
    setEventListeners();
  }

  function handleMobileMenuPopupOpen() {
    setIsMobileMenuPopupOpen(true);
    setEventListeners();
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function signOut () {
    localStorage.removeItem('token');
    setLoggedName('');
    setLoggedIn(false);
    history.push('/');
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      getToken(token)
        .then((res) => {
          if (res) {
            handleLogin();
            setLoggedName(res.data.name);
          //  history.push('/');
          } else {
            localStorage.removeItem('token');
          }
        })
        .catch((err) => console.log(err));
    }
  }
  React.useEffect(() => {
    tokenCheck();
    setKeyword(localStorage.getItem('search'));
  }, [loggedIn]);
  console.log(keyword);

  function setEventListeners() {
    window.addEventListener('keydown', closeByEsc);
    // overlay.addEventListener('click', closeAllPopups);
  }

  function remEventListeners() {
    window.removeEventListener('keydown', closeByEsc);
    // overlay.removeEventListener('click', closeAllPopups);
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute exact path='/saved-news'
              loggedIn={loggedIn}
              component={SavedNews}
              onClick={handleLoginClick}
              mobileMenuClick={handleMobileMenuPopupOpen}
              menuIsOpen={isMobileMenuPopupOpen}
              isLogged={loggedIn}
              signOut={signOut}
              loggedName={loggedName}
          />
          <Route exact path='/'>
            <Main
              onClick={handleLoginClick}
              mobileMenuClick={handleMobileMenuPopupOpen}
              menuIsOpen={isMobileMenuPopupOpen}
              isLogged={loggedIn}
              signOut={signOut}
              loggedName={loggedName}
              search={keyword}
              setSearch={setKeyword}
            />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
      <Footer />
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        onClickLogin={handleCreateUserClick}
        tokenCheck={tokenCheck}
      />
      <CreateUserPopup
        isOpen={isCreateUserPopupOpen}
        onClose={closeAllPopups}
        onClickReg={handleLoginClick}
        openResPopup={handleRegOkClick}
      />
      <RegOkPopup
        isOpen={isRegOkPopupOpen}
        onClose={closeAllPopups}
        onClickReg={handleLoginClick}
      />
    </div>
  );
}

export default App;
