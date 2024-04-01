import { createSlice } from "@reduxjs/toolkit";

let FolderClickSlice = createSlice({
    name: "FOLDER_CLICK_SLICE",
    initialState: { currentFolderID: 0 },
    reducers: {
        updateFolderID: (state, action) => {
            state.currentFolderID = action.payload.currentFolderID;
        }
    }
})

export const FolderClickActions = FolderClickSlice.actions;

export default FolderClickSlice;