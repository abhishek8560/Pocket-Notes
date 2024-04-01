import React, { useRef } from "react";
import { IoSendSharp } from "react-icons/io5";
import styles from "./NoteStringsInputContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { PocketNotesSliceActions } from "../../../store/PocketNotesSlice";

function NoteStringInputContainer() {
  let notesInput = useRef();
  let { currentFolderID } = useSelector((store) => store.FOLDER_CLICK_SLICE);

  let dispatch = useDispatch();

  function onNotesInputButtonClick() {
    dispatch(
      PocketNotesSliceActions.addNewNoteString({
        newNoteString: notesInput.current.value,
        currentFolderID: currentFolderID,
      })
    );
    notesInput.current.value = "";
  }
  return (
    <div className={styles.noteStringInputContainer}>
      <div>
        <textarea
          ref={notesInput}
          name=""
          id=""
          rows="5"
          placeholder="Enter Notes Content!"
        />
        <button onClick={onNotesInputButtonClick}>
          <IoSendSharp />
        </button>
      </div>
    </div>
  );
}

export default NoteStringInputContainer;
