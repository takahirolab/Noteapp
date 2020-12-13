import {
    ADDFOLDER,
    DELFOLDER,
    ADDNOTE,
    UPDATEFOLDER,
    GETNOTE,
  UPDATENOTE,
    C
  } from '../types';


export const AddFolderOne = (folderitem) => (dispatch) => {
    console.log(folderitem)
    dispatch({ type: ADDFOLDER,payload:folderitem });
}

export const UpdateFolder = (folderitem) => (dispatch) => {
    console.log(folderitem)
    dispatch({ type:UPDATEFOLDER,payload:folderitem});
  }
export const getNote = (noteid) => (dispatch) => {
    console.log(noteid)
    dispatch({ type:GETNOTE,payload:noteid});
}

export const NoteDataUpdate = (notedata) => (dispatch) => {
    console.log(notedata)
    dispatch({ type:UPDATENOTE,payload:notedata});
  }
export const FolderNoteDataUpdate = (notedata) => (dispatch) => {
    console.log(notedata)
    dispatch({ type:UPDATENOTE,payload:notedata});
  }
