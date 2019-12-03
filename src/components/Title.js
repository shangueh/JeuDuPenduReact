import React from "react";
import PropTypes from "prop-types";

// Composant qui affiche le mot à trouver
const Titre = ({ currentTitle, usedLetter, win }) => {
  const phrase = currentTitle.toUpperCase().split(/[ ,]+/);
  const mots = phrase.map(mot => mot.split(""));

  const letters = mots.map((mot, i) => (
    <ul key={i}>
      {mot.map((letter, i) => (
        <li key={i} className="titleLetter">
          <span
            className={
              usedLetter.indexOf(letter) === -1
                ? win === 2
                  ? "LetterRed"
                  : "LetterH"
                : "Letter"
            }
          >
            {letter}
          </span>
        </li>
      ))}
      <li>&nbsp;</li>
    </ul>
  ));

  return <div className="Titre">{letters}</div>;
};

Titre.propTypes = {
  currentTitle: PropTypes.string.isRequired,
  usedLetter: PropTypes.arrayOf(PropTypes.string).isRequired,
  win: PropTypes.number.isRequired
};

export default Titre;
