import {combineReducers} from "@reduxjs/toolkit";
import configReducer from "./slicers/config.slicer";
import stopEventsReducer from "./slicers/data.slicer";

export const rootReducer = combineReducers({
  config: configReducer,
  stopEvents: stopEventsReducer,
})