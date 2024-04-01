import React, { useContext, useState } from "react";
import styles from "./MyApp.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import WelcomeMsg from "./components/MainApp/WelcomeMsg";
import RightSidebar from "./components/MainApp/RightSidebar/RightSidebar";
import PocketNotesContext from "./storeContext/PocketNotesContext";

function MyApp() {
  let { showWelcomeScreen } = useContext(PocketNotesContext);

  return (
    <div className={styles.myAppContainer}>
      <Sidebar />
      {showWelcomeScreen ? <WelcomeMsg /> : <RightSidebar />}
    </div>
  );
}

export default MyApp;
