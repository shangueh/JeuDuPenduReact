import React from "react";

// Theme
import GlobalStyle from "./theme/GlobalStyle";

// Components & Pages
import Gaming from "./pages/Gaming";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Gaming />
    </div>
  );
};

export default App;
