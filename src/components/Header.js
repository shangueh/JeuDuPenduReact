import React from "react";
import styled from "styled-components";
import { colors, layout, media, pxToRem } from "../theme/helpers";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <div className="content">
        <h1>Hangman Game</h1>
        <div className="support">
          <p>LinkedIn Page</p>
          <p>GitHub Page</p>
        </div>
      </div>
    </header>
  );
};

export default styled(Header)`
  border-bottom: ${pxToRem(4)} solid ${colors.primary};
  text-align: center;
  //layout permet de garder une taille max du site
  .content {
    ${layout(800)}
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(292px, 1fr));
    align-items: center;
  }
  h1 {
    color: ${colors.accent};
    font-weight: 900;
  }
  .phone-number {
    color: ${colors.accent};
    font-weight: 700;
  }
  // Tout ce qui est au dessus de small = plus grand
  ${media.small`
  h1 {
    text-align: center;
  }
  .support {
    text-align: right;
  }
  `};
`;
