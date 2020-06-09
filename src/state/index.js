import { state as appState, reducer as appReducer } from "./app";

export const initialState = {
  app: { ...appState },
};

export const reducers = ({ app }, action) => ({
  app: appReducer(app, action)
});

