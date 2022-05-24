import { toastReducer } from './../components/app-toast/toastSlice';
import { loginReducer } from 'screens/login/loginSlice';

import { combineReducers } from '@reduxjs/toolkit'
export const rootReducer = combineReducers({
    loginReducer,
    toastReducer
})
