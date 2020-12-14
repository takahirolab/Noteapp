import {
    ADD_FOLDERANDNOTE,
    ADD_NOTE,
    UPDATE_NOTE,
    UPDATE_NOTEINFOLDER
  } from '../types';

  const initialState = {
    MainFolder:[]
  };

  export default function(state = initialState, action) {
      switch (action.type) {
        // 第二階層にノートおよびフォルダーを追加する
        case ADD_FOLDERANDNOTE:
            return {
                ...state,
                // 更新ではなく追加
                MainFolder: state.MainFolder.concat(action.payload)
            }


        // 第三階層にノートを追加する
        case ADD_NOTE:
             // 更新するノートの配列番号を取得
            let index = state.MainFolder.findIndex(
                (folder) => folder.id === action.payload)
            // 取得したpayloadで更新
            state.MainFolder[index] = action.payload;
            return {
               ...state,
            }

        // 第二階層のノートを更新する
        case UPDATE_NOTE:
            // 更新するノートの配列番号を取得
            let Noteno = state.MainFolder.findIndex(
                (folder) => folder.id === action.payload.id)

              // 取得したpayloadで更新
            state.MainFolder[Noteno] = action.payload;
            return {
               ...state,
            }


        // 第三階層のノートを更新する
        case UPDATE_NOTEINFOLDER:
            // 更新するフォルダーの配列番号を取得
            let FolderNote = state.MainFolder.findIndex(
                (folder) => folder.id === action.payload.FolderId)

             // 更新するフォルダーの配列番号を取得
            let Note = state.MainFolder[FolderNote].Notefolder.findIndex(
                (folder) => folder.id === action.payload.id)

            // state.MainFolder[FolderNote]= action.payload;
                state.MainFolder[FolderNote].Notefolder[Note]= action.payload;

            return {
               ...state,
            }

        default:
            return state;
    }
}
