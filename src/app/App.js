import React from "react";
import { Grommet } from 'grommet';

import { StateProvider } from "./context";
import theme from './theme';
import { reducers, initialState } from "../state";

const App = ({ children }) => {
  return (
    <Grommet full={true} theme={theme}>
      <StateProvider initialState={initialState} reducer={reducers}>
        {children}
      </StateProvider>
    </Grommet>
  );
};

export default App;