import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import CreateUserPopup from '../CreateUserPopup/CreateUserPopup';
import RegOkPopup from '../RegOkPopup/RegOkPopup';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isCreateUserPopupOpen, setIsCreateUserPopupOpen] = React.useState(false);
  const [isRegOkPopupOpen, setIsRegOkPopupOpen] = React.useState(false);
  const [isMobileMenuPopupOpen, setIsMobileMenuPopupOpen] = React.useState(false);

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
      <Switch>
        <Route path='/saved-news'>
          <SavedNews onClick={handleLoginClick} mobileMenuClick={handleMobileMenuPopupOpen} menuIsOpen={isMobileMenuPopupOpen} />
        </Route>
        <Route path='/'>
          <Main onClick={handleLoginClick} mobileMenuClick={handleMobileMenuPopupOpen} menuIsOpen={isMobileMenuPopupOpen} />
        </Route>
      </Switch>
      <Footer />
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        onClickLogin={handleCreateUserClick}
      />
      <CreateUserPopup
        isOpen={isCreateUserPopupOpen}
        onClose={closeAllPopups}
        onClickReg={handleLoginClick}
        onSubmit={handleRegOkClick}
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
