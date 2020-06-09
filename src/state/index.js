import { state as appState, reducer as appReducer } from "./application";

export const initialState = {
  app: { ...appState },
};

export const reducers = ({ app }, action) => ({
  app: appReducer(app, action)
});

