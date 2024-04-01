import { createSlice } from "@reduxjs/toolkit";

function generateRandomColor() {
  let colorArray = [
    "Red",
    "Green",
    "Lightgreen",
    "Orange",
    "Orangered",
    "Pink",
    "Grey",
    "Blue",
    "Skyblue",
    "Aqua",
    "Rebeccapurple",
  ];

  let randomIndex = Math.floor(Math.random() * (colorArray.length + 1));
  console.log(randomIndex);
  let randomColor = colorArray[randomIndex];
  return randomColor;
}
let INITIAL_STATE = [];

let id = 0;

let PocketNotesSlice = createSlice({
  name: "POCKET_NOTES_SLICE",
  initialState: { notesArray: INITIAL_STATE },
  reducers: {
    addNewFolder: (state, action) => {
      id = id + 1;
      let myAcronym = action.payload.newFolderName;
      myAcronym = myAcronym[0] + myAcronym[1];
      myAcronym = myAcronym.toUpperCase();
      let acronymColor = generateRandomColor();
      let newNotesObj = {
        id: id,
        folderName: action.payload.newFolderName,
        acronym: myAcronym,
        acronymColor: acronymColor,
        noteStringsArray: [],
      };

      state.notesArray = [...state.notesArray, newNotesObj];
    },

    addNewNoteString: (state, action) => {
      let currentIndex = state.notesArray.findIndex(
        (notesObj) => notesObj.id === action.payload.currentFolderID
      );

      let currentNotesObj = state.notesArray.find(
        (notesObj) => notesObj.id === action.payload.currentFolderID
      );

      let updatedNoteStringsArray = [
        ...currentNotesObj.noteStringsArray,
        action.payload.newNoteString,
      ];

      currentNotesObj.noteStringsArray = [...updatedNoteStringsArray];

      let updatedNotesArray = [...state.notesArray];

      updatedNotesArray[currentIndex] = currentNotesObj;

      state.notesArray = [...updatedNotesArray];
    },
  },
});

export const PocketNotesSliceActions = PocketNotesSlice.actions;

export default PocketNotesSlice;
