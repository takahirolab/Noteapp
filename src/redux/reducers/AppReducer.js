import {
    ADDFOLDER,
    DELFOLDER,
    ADDNOTE,
    UPDATEFOLDER,
    GETNOTE,
    UPDATENOTE,
    FOLDERNOTEUPDATE

  } from '../types';

  const initialState = {
    MainFolder:[]
  };

  export default function(state = initialState, action) {
    switch (action.type) {
        case ADDFOLDER:
            return {
                ...state,
                MainFolder: state.MainFolder.concat(action.payload)
            }

        case UPDATEFOLDER:
            let index = state.MainFolder.findIndex(
                (folder) => folder.id === action.payload)
            state.MainFolder[index] = action.payload;
            return {
               ...state,
            }

        case UPDATENOTE:
            let Noteno = state.MainFolder.findIndex(
                (folder) => folder.id === action.payload.id)
            state.MainFolder[Noteno] = action.payload;
            return {
               ...state,
            }

        case FOLDERNOTEUPDATE:
            let FolderNote = state.MainFolder.findIndex(
                (folder) => folder.id === action.payload.FolderId)

            // let Note = state.MainFolder[FolderNote].findIndex(
            //     (note) => note.id === action.payload.FolderId)

            state.MainFolder[FolderNote] = action.payload;
                // state.MainFolder[FolderNote].Notefolder[Note]= action.payload;

            return {
               ...state,
            }

        default:
            return state;
    }
}



// let index = state.parks.findIndex(
//     (park) => park.parkId === action.payload.parkId
//   );
//   state.parks[index] = action.payload;
//   if (state.park.parkId === action.payload.parkId) {
//     state.park = action.payload;
//   }
