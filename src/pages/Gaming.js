import React, { useState } from "react";
import data from "../data";

// Components
import Header from "../components/Header";
import HangmanImages from "../components/HangmanImages";
import Title from "../components/Title";
import Keyboard from "../components/Keyboard";
import Footer from "../components/Footer";

const LETTERS = /^[a-z]+$/i;
const TRYLOST = 7;
const WINTEXT = "GAGNÉ !!!";
const LOSETEXT = "PERDU !!!";

const Gaming = () => {
  const [lost, setLost] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(data.title[0]);
  const [usedLetter, setUsedLetter] = useState([]);
  const [win, setWin] = useState(1);
  const [message, setMessage] = useState(null);

  // Quand on clique sur une lettre
  const handleLetterClick = letter => {
    // On test si la lettre est deja utilisée
    if (usedLetter.indexOf(letter) === -1) {
      setUsedLetter([letter, ...usedLetter]);

      // On test si la lettre est dans le titre
      if (
        currentTitle
          .toUpperCase()
          .replace(/ /g, "")
          .split("")
          .indexOf(letter) === -1
      ) {
        setLost(lost + 1);
      }

      // On test si le mot est trouvé
      let isWin = 0;
      currentTitle
        .toUpperCase()
        .replace(/ /g, "")
        .split("")
        .map(letter => {
          if (usedLetter.indexOf(letter) === -1) isWin++;
          return isWin;
        });
      if (isWin === 0) {
        setMessage(WINTEXT);
      } else isWin = 1;
      // On test si trop d'essais
      if (lost === 6) {
        isWin = 2;
        setMessage(LOSETEXT);
      }
      setWin(isWin);
    } else {
      // lettre deja utilisée
      setLost(lost + 1);
      if (lost === TRYLOST) {
        setWin(2);
        setMessage(LOSETEXT);
      }
    }
  };

  // Quand on clique sur une touche du clavier
  const handleKeyPress = e => {
    const keyName = e.key;
    if (LETTERS.test(keyName)) {
      return handleLetterClick(keyName.toUpperCase());
    }
  };

  // Nouvelle Partie
  const newGame = () => {
    setCurrentTitle(data.title[Math.floor(Math.random() * data.title.length)]);
    setUsedLetter([]);
    setWin(1);
    setLost(0);
    setMessage(null);
  };

  return (
    <div onKeyDown={e => handleKeyPress(e)} tabIndex="0">
      <Header />
      {win > 0 && <HangmanImages lost={lost} />}
      {win !== 1 && (
        <div>
          <p>{message}</p>
          <button onClick={() => newGame()}>Nouvelle Partie</button>
        </div>
      )}
      <Title currentTitle={currentTitle} usedLetter={usedLetter} win={win} />
      {win === 1 && <Keyboard onClick={handleLetterClick} />}
      <Footer />
    </div>
  );
};

export default Gaming;
