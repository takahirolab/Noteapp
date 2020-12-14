import {
  ADD_FOLDERANDNOTE,
  ADD_NOTE,
  UPDATE_NOTE,
  UPDATE_NOTEINFOLDER
  } from '../types';


  // 第二階層にフォルダーもしくはノートを追加
export const AddFolderAndNote = (folderitem) => (dispatch) => {
    dispatch({ type: ADD_FOLDERANDNOTE,payload:folderitem });
}

// 第三階層にノートを追加
export const AddNoteInFolder = (folderitem) => (dispatch) => {
    dispatch({ type:ADD_NOTE,payload:folderitem});
  }

// 第二階層のノートデータを更新
export const UpdateNote = (notedata) => (dispatch) => {
    dispatch({ type:UPDATE_NOTE,payload:notedata});
}

// 第三階層のノートデータを更新
export const UpdateNoteInFolder = (notedata) => (dispatch) => {
    dispatch({ type: UPDATE_NOTEINFOLDER,payload:notedata});
  }
