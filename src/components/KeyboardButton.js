import React from "react";
import styled from "styled-components";
import { pxToRem, media } from "../theme/helpers";
import PropTypes from "prop-types";

// Composant qui affiche l'alphabet
const KeyboardButton = ({ className, letter, index, onClick }) => (
  <div
    className={className}
    key={index}
    index={index}
    onClick={() => onClick(letter)}
  >
    {letter}
  </div>
);

KeyboardButton.propTypes = {
  letter: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default styled(KeyboardButton)`
  border: ${pxToRem(2)} solid black;
  border-radius: ${pxToRem(8)}
  padding: ${pxToRem(4)}
  font-size: 80%
  text-align:  center
  background-color: white;

  :hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }

  // Tout ce qui est au dessus de small = plus grand
  ${media.small`
    font-size: 150%
  `};
`;
