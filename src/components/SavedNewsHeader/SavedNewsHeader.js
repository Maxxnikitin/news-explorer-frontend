import React from "react";
import "./SavedNewsHeader.css";
import { api } from "../../utils/MainApi";

function SavedNewsHeader(props) {
  const [number, setNumber] = React.useState("0");
  const [uniqueNames, setUniqueNames] = React.useState([]);

  const getCountArticles = () => {
    api
      .getAllArticles()
      .then((res) => {
        setNumber(res.length);
        const keywordArray = res.map((item) => {
          return item.keyword;
        });
        setUniqueNames(
          keywordArray
            .reduce((y, x) => (y.includes(x) ? y : [...y, x]), [])
            .sort()
        );
      })
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    getCountArticles();
  }, []);

  function declOfNum(num, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
    ];
  }
  const savedText = declOfNum(number, [
    "сохранённая статья",
    "сохранённые статьи",
    "сохранённых статей",
  ]);

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__about">Сохранённые статьи</p>
      <h2 className="saved-news-header__title">{`${props.loggedName}, у вас ${number} ${savedText}`}</h2>
      <p className="saved-news-header__keywords">
        По ключевым словам:{" "}
        <span className="saved-news-header__keywords_bold">
          {uniqueNames.length === 0
            ? ""
            : `${uniqueNames[0]}, ${uniqueNames[1] ? uniqueNames[1] : ""} и ${
                uniqueNames.length - 2 || 0
              } другим.`}
        </span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
