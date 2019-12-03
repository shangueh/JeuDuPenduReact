import React from "react";
import styled from "styled-components";
import { pxToRem, layout, media } from "../theme/helpers";
import PropTypes from "prop-types";

// Composant qui affiche le mot à trouver
const Title = ({ className, currentTitle, usedLetter, win }) => {
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

  return <div className={className}>{letters}</div>;
};

Title.propTypes = {
  currentTitle: PropTypes.string.isRequired,
  usedLetter: PropTypes.arrayOf(PropTypes.string).isRequired,
  win: PropTypes.number.isRequired
};

export default styled(Title)`
  ${layout()}
  font-size: ${pxToRem(32)};
  text-align: center;
  padding: 20px 0 0;
  
  ul {
    display: inline-block;
    padding: 0;
  }
  
  li {
    display: inline-block;
    text-transform: uppercase;
    width: 16px;
    margin-bottom: 15px;
    box-sizing: border-box;
  }
  
  li.titleLetter {
    border-bottom: 1px solid #666;
    margin-right: 4px;
    font-weight: bold;
    font-size: 16px;
  }
  
  span.Letter {
    visibility: visible
  }
  
  span.LetterRed {
    visibility: visible;
    color: red;
  }
  
  span.LetterH {
    visibility: hidden;
  }

  // Tout ce qui est au dessus de small = plus grand
  ${media.small`
    li {
      width: 26px;
    }
    
    li.titleLetter {
      font-size: 26px;
    }
  `};
`;
