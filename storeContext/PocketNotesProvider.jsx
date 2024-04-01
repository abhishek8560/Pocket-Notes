import React, { useState } from "react";
import PocketNotesContext from "./PocketNotesContext";

function PocketNotesProvider({ children }) {
  let [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  function setWelcomeShow() {
    setShowWelcomeScreen(false);
  }
  return (
    <PocketNotesContext.Provider value={{ showWelcomeScreen, setWelcomeShow }}>
      {children}
    </PocketNotesContext.Provider>
  );
}

export default PocketNotesProvider;
