import { createSlice } from '@reduxjs/toolkit'



export const homeSlice = createSlice({
  name: 'home',
  initialState : {
    url : {},
    genres : {}
  },
  reducers: {
   getApiConfiguration : (state , action)=>{
      state.url = action.payload;
   },
   getGenres : (state , action)=>{
      state.genres = action.payload;
   }
  },
})

// Action creators are generated for each case reducer function
export const {getApiConfiguration , getGenres  } =homeSlice.actions;

export default homeSlice.reducer;






// export const homeSlice = createSlice({
//   name: 'home',
//   initialState:{
//     url:{},
//     generas:{},

//   },
//   reducers: {
//    getApiConfiguration: (state , action)=>{
//       state.url = action.payload;
//    },
//    getGenres: (state , action)=>{
//       state.generas = action.payload;
//    }
//   },
// })

// // Action creators are generated for each case reducer function
// export const { getApiConfiguration , getGenres } = homeSlice.actions

// export default homeSlice.reducer