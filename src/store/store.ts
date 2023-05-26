import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { persistStore} from "redux-persist";
import {persistedReducer} from "./persist";

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV! === 'production',
  middleware: [thunk],
})

export const persistor = persistStore(store)