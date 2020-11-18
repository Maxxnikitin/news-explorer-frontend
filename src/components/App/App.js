import React from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginPopup from "../LoginPopup/LoginPopup";
import CreateUserPopup from "../CreateUserPopup/CreateUserPopup";
import RegOkPopup from "../RegOkPopup/RegOkPopup";
import { getToken } from "../../utils/auth";
import ProtectedRoute from "../ProptectedRoute/ProptectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/Validation";
import { api } from "../../utils/MainApi";

function App() {
  const token = localStorage.getItem("token");
  const [currentUser, setCurrentUser] = React.useState({});
  const [articles, setArticles] = React.useState([]);
  const history = useHistory();
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isCreateUserPopupOpen, setIsCreateUserPopupOpen] = React.useState(
    false
  );
  const [isRegOkPopupOpen, setIsRegOkPopupOpen] = React.useState(false);
  const [isMobileMenuPopupOpen, setIsMobileMenuPopupOpen] = React.useState(
    false
  );
  const [loggedIn, setLoggedIn] = React.useState(!!token);
  const [loggedName, setLoggedName] = React.useState("");
  const [keyword, setKeyword] = React.useState("");
  const [savedArticles, setSavedArticles] = React.useState([]);
  const validate = useFormWithValidation();

  // const overlay = document.querySelector('.popup__overlay');

  function getUserInfo(token) {
    Promise.all([getToken(token), api.getAllArticles(token)])
      .then(([user, articles]) => {
        setCurrentUser(user);
        const localCards = JSON.parse(localStorage.getItem("articles") || []);
        setSavedArticles(articles);
        setArticles(localCards, articles);
      })
      .catch((err) => console.log(err));
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsCreateUserPopupOpen(false);
    setIsRegOkPopupOpen(false);
    remEventListeners();
    validate.resetForm();
  }

  function closeByEsc(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
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

  function signOut() {
    localStorage.removeItem("token");
    setLoggedName("");
    setLoggedIn(false);
    history.push("/");
  }

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      getToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            handleLogin();
            setLoggedName(res.data.name);
            setCurrentUser(res);
            //  history.push('/');
          } else {
            localStorage.removeItem("token");
          }
        })
        .catch((err) => console.log(err));
    }
  }
  React.useEffect(() => {
    tokenCheck();
    setKeyword(localStorage.getItem("search"));
  }, [loggedIn]);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getToken(token);
    } else {
      const local = localStorage.getItem("articles");
      const localCards = local ? JSON.parse(local) : [];
      setArticles(localCards);
    }
  }, []);

  function setEventListeners() {
    window.addEventListener("keydown", closeByEsc);
    // overlay.addEventListener('click', closeAllPopups);
  }

  function remEventListeners() {
    window.removeEventListener("keydown", closeByEsc);
    // overlay.removeEventListener('click', closeAllPopups);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <ProtectedRoute
            exact
            path="/saved-news"
            loggedIn={loggedIn}
            component={SavedNews}
            onClick={handleLoginClick}
            mobileMenuClick={handleMobileMenuPopupOpen}
            menuIsOpen={isMobileMenuPopupOpen}
            isLogged={loggedIn}
            signOut={signOut}
            loggedName={loggedName}
            savedArticles={savedArticles}
            setSavedArticles={setSavedArticles}
          />
          <Route exact path="/">
            <Main
              onClick={handleLoginClick}
              mobileMenuClick={handleMobileMenuPopupOpen}
              menuIsOpen={isMobileMenuPopupOpen}
              isLogged={loggedIn}
              signOut={signOut}
              loggedIn={loggedIn}
              loggedName={loggedName}
              keyword={keyword}
              setKeyword={setKeyword}
              openReg={handleCreateUserClick}
              setArticles={setArticles}
              articles={articles}
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
