import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import FolderName from "./FolderName";
import FolderNameInputContainer from "./FolderNameInputContainer";
import { useDispatch, useSelector } from "react-redux";
import { FolderClickActions } from "../../store/FolderClickSlice";
import PocketNotesContext from "../../storeContext/PocketNotesContext";

function Sidebar({ onWelcomeChange }) {
  let { setWelcomeShow } = useContext(PocketNotesContext);

  let { notesArray } = useSelector((store) => store.POCKET_NOTES_SLICE);

  let dispatch = useDispatch();

  function onFolderClick(currentFolderID) {
    setWelcomeShow();
    dispatch(
      FolderClickActions.updateFolderID({ currentFolderID: currentFolderID })
    );
  }
  return (
    <div className={styles.sidebarContainer}>
      <h1>Pocket Notes</h1>

      <div className={styles.folderNamesContainer}>
        {notesArray.length === 0 ? (
          <h1>No Folders</h1>
        ) : (
          notesArray.map((notesObj) => (
            <FolderName
              onWelcomeChange={onWelcomeChange}
              key={notesObj.id}
              notesObj={notesObj}
              onFolderClick={onFolderClick}
            />
          ))
        )}
      </div>

      <FolderNameInputContainer />
    </div>
  );
}

export default Sidebar;
