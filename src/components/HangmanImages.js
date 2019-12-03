import React from "react";
import styled from "styled-components";
import { pxToRem, layout, media } from "../theme/helpers";
import PropTypes from "prop-types";

// Composant qui affiche les coeurs
const HangmanImages = ({ className, lost }) => {
  const HEART = "❤️".repeat(7 - lost);
  const HEARTBREAK = "💔".repeat(lost);

  return (
    <div className={className}>
      <span className="Full">{HEARTBREAK}</span>
      <span className="Empty">{HEART}</span>
    </div>
  );
};

HangmanImages.propTypes = {
  lost: PropTypes.number.isRequired
};

export default styled(HangmanImages)`
  ${layout()}
  font-size: ${pxToRem(32)};
  text-align: center;

  .Full {
    opacity: 1;
  }

  .Empty {
    opacity: 0.25;
  }

  // Tout ce qui est au dessus de small = plus grand
  ${media.small`
    font-size: ${pxToRem(64)};
  `};
`;
