import { state as appState, reducer as appReducer } from "./app";

export const initialState = {
  ...appState,
};

export const reducers = ({ app }, action) => {
  appReducer(app, action)
};

