import React from 'react';
import { Grommet, grommet } from 'grommet';

import { StateProvider } from "./context";
import { reducers, initialState } from "../state";

const App = ({ children }) => (
  <Grommet full={true} theme={grommet}>
    <StateProvider initialState={initialState} reducer={reducers}>
      {children}
    </StateProvider>
  </Grommet>
);

export default App;