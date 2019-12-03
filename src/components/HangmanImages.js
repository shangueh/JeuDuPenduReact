import React from "react";
import PropTypes from "prop-types";

// Composant qui affiche les coeurs
const HangmanImages = ({ lost }) => {
  const HEART = "❤️".repeat(7 - lost);
  const HEARTBREAK = "💔".repeat(lost);

  return (
    <div className="Life">
      <span className="Full">{HEARTBREAK}</span>
      <span className="Empty">{HEART}</span>
    </div>
  );
};

HangmanImages.propTypes = {
  lost: PropTypes.number.isRequired
};

export default HangmanImages;
