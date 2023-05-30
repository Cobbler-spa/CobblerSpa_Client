import {
    createSlice,
    createAsyncThunk
  } from "@reduxjs/toolkit";
  import * as api from "../api";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        user: null,
        error:"",
        loading:false,
        token: ""
    },
    reducers:{
        setUser: (state, action) => {
          state.user = action.payload;
        },
        setToken:(state, action)=>{
          state.token = action.payload
        },
        setLogout: (state, action) => {
          localStorage.clear();
          state.user = null;
        },
      },

      extraReducers:{
        
      }
})
export const { setUser, setLogout, setToken } = authSlice.actions;
  export default authSlice.reducer;