import React from "react";
import styled from "styled-components";

import { colors } from "../theme/helpers";

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <p className="bold">
        Copyright 2019 Shangueh - GitHub Link - LinkedIn Link
      </p>
    </footer>
  );
};

export default styled(Footer)`
  border-top: 1px solid ${colors.primary};
  p {
    text-align: center;
  }
`;
