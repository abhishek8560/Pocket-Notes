import React from "react";
import styles from "./RightSidebar.module.css";
import NotesHeading from "./NotesHeading";
import NoteStringsContainer from "./NoteStringsContainer";
import NoteStringInputContainer from "./NoteStringInputContainer";

function RightSidebar() {
  return (
    <div className={styles.rightSidebarContainer}>
      <NotesHeading />
      <NoteStringsContainer />
      <NoteStringInputContainer />
    </div>
  );
}

export default RightSidebar;
