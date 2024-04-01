import React from "react";
import styles from "./NotesHeading.module.css";
import { useSelector } from "react-redux";

function NotesHeading() {
  let { currentFolderID } = useSelector((store) => store.FOLDER_CLICK_SLICE);
  let { notesArray } = useSelector((store) => store.POCKET_NOTES_SLICE);

  let currentNotesObj =
    currentFolderID > 0 &&
    notesArray.find((notesObj) => notesObj.id === currentFolderID);
  return (
    <>
      {currentFolderID > 0 && (
        <div className={styles.notesHeading}>
          <span style={{ backgroundColor: currentNotesObj.acronymColor }}>
            {currentNotesObj.acronym}
          </span>
          <p>{currentNotesObj.folderName}</p>
        </div>
      )}
    </>
  );
}

export default NotesHeading;
