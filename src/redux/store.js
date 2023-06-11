import { configureStore } from "@reduxjs/toolkit";
import Authreducer from './features/authSlice.js'

export default configureStore({
    reducer:{
        auth: Authreducer, //we will able to access the authslice with namme of auth using useselector
    }
})