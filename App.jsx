import React from "react";
import MyApp from "./MyApp";
import { Provider } from "react-redux";
import PocketNotesStore from "./store/PocketNotesStore";
import "./App.css";
import PocketNotesProvider from "./storeContext/PocketNotesProvider";

function App() {
  return (
    <PocketNotesProvider>
      <Provider store={PocketNotesStore}>
        <div className="appContainer">
          <MyApp />
        </div>
      </Provider>
    </PocketNotesProvider>
  );
}

export default App;
