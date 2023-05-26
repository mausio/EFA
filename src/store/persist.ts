import {persistReducer} from "redux-persist";
import storage from "redux-persist/es/storage";
import {rootReducer} from "./root";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['stopEvents', 'app'],
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
