import React from "react";
import styles from "./FolderName.module.css";

function FolderName({ notesObj, onFolderClick, onWelcomeChange }) {
  return (
    <button
      className={styles.folderNameContainer}
      onClick={() => onFolderClick(notesObj.id)}
    >
      <span style={{ backgroundColor: notesObj.acronymColor }}>
        {notesObj.acronym}
      </span>
      <p>{notesObj.folderName}</p>
    </button>
  );
}

export default FolderName;
