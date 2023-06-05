import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk(
  "auth/login",
  async ({
    formValue,
    navigate,
    toast
  }, {
    rejectWithValue
  }) => {
    try {
      const response = await api.signIn(formValue);
      toast.success("Logged in Successfully");
      navigate("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data); //this will get the message which we specified in login controller when error occures
    }
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
    token: ""
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },

  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true
    },
    [login.fullfilled]: (state, action) => {
      state.loading = false
      console.log(action.payload)
      const {
        user,
        token
      } = action.payload;
      state.token = token
      localStorage.setItem("profile", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));

      state.user = user
    },
    [login.rejected]:(state, action)=>{
      state.loading= false;
      state.error = action.payload.error
    }
  }
})
export const {
  setUser,
  setLogout,
  setToken
} = authSlice.actions;
export default authSlice.reducer;