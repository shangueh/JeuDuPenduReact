import React, { Component } from "react";
import "./App.css";
import Titre from "./components/Title";
import Clavier from "./components/KeyboardButton";
import Coeurs from "./components/HangmanImages";

const TITRES = [
  "le petit chaperon rouge",
  "pierre et le loup",
  "la cigale et la fourmie"
];
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const LETTERS = /^[a-z]+$/i;
const TRYLOST = 7;
const WINTEXT = "GAGNÉ !!!";
const LOSETEXT = "PERDU !!!";

// Composant principal
class App extends Component {
  state = {
    currentTitle: this.randomTitle(),
    usedLetter: [],
    win: 1,
    lost: 0,
    message: null
  };

  // On prends un mot au hasard de la liste WORDS
  randomTitle() {
    const titre = TITRES[[Math.floor(Math.random() * TITRES.length)]];
    return titre;
  }

  // Quand on clique sur une lettre
  handleLetterClick = letter => {
    let { lost, win, message } = this.state;

    // On test si la lettre est deja utilisée
    if (this.state.usedLetter.indexOf(letter) === -1) {
      const usedLetter = [letter, ...this.state.usedLetter];

      // On test si la lettre est dans le titre
      if (
        this.state.currentTitle
          .toUpperCase()
          .replace(/ /g, "")
          .split("")
          .indexOf(letter) === -1
      )
        lost++;
      // On test si le mot est trouvé
      let win = 0;
      this.state.currentTitle
        .toUpperCase()
        .replace(/ /g, "")
        .split("")
        .map(letter => {
          if (usedLetter.indexOf(letter) === -1) win++;
          return win;
        });
      if (win === 0) {
        message = WINTEXT;
      } else win = 1;
      // On test si trop d'essais
      if (this.state.lost === 6) {
        win = 2;
        message = LOSETEXT;
      }
      // On mets à jour le state
      this.setState({ usedLetter, win, lost, message });
    } else {
      // lettre deja utilisée
      console.log("La lettre est deja utilisée");
      lost++;
      if (lost === TRYLOST) {
        win = 2;
        message = LOSETEXT;
      }
      this.setState({ lost, win, message });
    }
  };

  // Quand on clique sur une touche du clavier
  handleKeyPress = e => {
    const keyName = e.key;
    if (LETTERS.test(keyName)) {
      console.log("lettre: " + keyName);
      return this.handleLetterClick(keyName.toUpperCase());
    }
  };

  // isWin ?

  // isLost ?

  // Nouvelle Partie
  newGame = () => {
    this.setState({
      currentTitle: this.randomTitle(),
      usedLetter: [],
      win: 1,
      lost: 0,
      message: null
    });
  };

  // On fait le rendu global de l'application
  render() {
    const { currentTitle, usedLetter, lost, win } = this.state;
    return (
      <div className="App" onKeyPress={this.handleKeyPress}>
        <h1>Jeu du Pendu</h1>
        {this.state.win > 0 && <Coeurs lost={lost} />}
        {this.state.win !== 1 && (
          <div>
            <p>{this.state.message}</p>
            <button onClick={() => this.newGame()}>Nouvelle Partie</button>
          </div>
        )}
        <Titre currentTitle={currentTitle} usedLetter={usedLetter} win={win} />
        {this.state.win === 1 && (
          <div className="Letter">
            {ALPHABET.map((letter, index) => (
              <Clavier
                key={index}
                letter={letter}
                index={index}
                onClick={this.handleLetterClick}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
