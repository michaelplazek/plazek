import React from 'react';
import { StateProvider } from "./context";
import { reducers, initialState } from "../state";

const App = ({ children }) => (
  <StateProvider initialState={initialState} reducer={reducers}>
    {children}
  </StateProvider>
);

export default App;