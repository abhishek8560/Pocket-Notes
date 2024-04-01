import { configureStore } from "@reduxjs/toolkit";
import PocketNotesSlice from "./PocketNotesSlice";
import FolderClickSlice from "./FolderClickSlice";

let PocketNotesStore = configureStore({
    reducer: {
        POCKET_NOTES_SLICE: PocketNotesSlice.reducer,
        FOLDER_CLICK_SLICE: FolderClickSlice.reducer
    }
})

export default PocketNotesStore;