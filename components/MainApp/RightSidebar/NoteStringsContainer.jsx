import React from "react";
import styles from "./NoteStringsContainer.module.css";
import { useSelector } from "react-redux";

function NoteStringsContainer() {
  let { notesArray } = useSelector((store) => store.POCKET_NOTES_SLICE);
  let { currentFolderID } = useSelector((store) => store.FOLDER_CLICK_SLICE);

  let currentFolderObject = notesArray.find(
    (notesFolder) => notesFolder.id === currentFolderID
  );

  return (
    <div className={styles.noteStringsContainer}>
      {currentFolderID > 0 &&
      currentFolderObject.noteStringsArray.length === 0 ? (
        <h1>No Notes</h1>
      ) : (
        currentFolderObject.noteStringsArray.map((noteString, index) => (
          <p key={index} className={styles.noteString}>
            {noteString}
          </p>
        ))
      )}
    </div>
  );
}

export default NoteStringsContainer;
