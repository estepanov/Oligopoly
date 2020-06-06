import React from 'react';
import { Flex } from "rebass";

import Board from "./components/Board";

const App: React.FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center" flexShrink={0} height="100%" width="100%">
      <Board />
    </Flex>
  );
}

export default App;
