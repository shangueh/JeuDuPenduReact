import React from "react";
import styled from "styled-components";
import { pxToRem, layout, media } from "../theme/helpers";
import KeyboardButton from "./KeyboardButton";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Composant qui affiche l'alphabet
const Keyboard = ({ className, onClick }) => (
  <div className={className}>
    {ALPHABET.map((letter, index) => (
      <KeyboardButton
        key={letter + index}
        letter={letter}
        index={index}
        onClick={onClick}
      />
    ))}
  </div>
);

export default styled(Keyboard)`
  ${layout()}
  padding: ${pxToRem(8)};
  display: grid;
  justify-content: center;
  grid-gap: ${pxToRem(8)};
  grid-template-columns: repeat(8, 32px);
  grid-template-rows: repeat(6, 32px);
  grid-auto-flow: row;

  // Tout ce qui est au dessus de small = plus grand
  ${media.small`
    padding: 20px 0;
    grid-template-columns: repeat(12, 50px);
    grid-template-rows: repeat(3, 50px) ;
  `};

`;
