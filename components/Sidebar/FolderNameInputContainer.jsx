import React, { useRef } from "react";
import { IoSendSharp } from "react-icons/io5";
import styles from "./FolderNameInputContainer.module.css";
import { useDispatch } from "react-redux";
import { PocketNotesSliceActions } from "../../store/PocketNotesSlice";

function FolderNameInputContainer() {
  let folderInput = useRef();
  let dispatch = useDispatch();
  function onNewFolderInputClick() {
    dispatch(
      PocketNotesSliceActions.addNewFolder({
        newFolderName: folderInput.current.value,
      })
    );
    folderInput.current.value = "";
  }
  return (
    <div className={styles.folderNameInputContainer}>
      <div className={styles.inputContainer}>
        <input ref={folderInput} type="text" placeholder="Create new folder!" />
        <button onClick={onNewFolderInputClick}>
          <IoSendSharp />
        </button>
      </div>
    </div>
  );
}

export default FolderNameInputContainer;
