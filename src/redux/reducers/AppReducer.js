import {
    ADDFOLDER,
    DELFOLDER,
    ADDNOTE,
    UPDATEFOLDER,
    GETNOTE

  } from '../types';

  const initialState = {
    MainFolder:[],
    getNote:[],
    folder3:[],
    folder4:[],
  };

  export default function(state = initialState, action) {
    switch (action.type) {
        case ADDFOLDER:
            return {
                ...state,
                MainFolder: state.MainFolder.concat(action.payload)
            }


        // case GETNOTE:
        //     let index = state.MainFolder.findIndex(
        //         (folder) => folder.id === action.payload.id)
        //     state.MainFolder[index] = action.payload;
        //     return {
        //         ...state,
        //         getNote:state.MainFolder
        //     }

        case UPDATEFOLDER:
            let index = state.MainFolder.findIndex(
                (folder) => folder.id === action.payload)
            state.MainFolder[index] = action.payload;
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
