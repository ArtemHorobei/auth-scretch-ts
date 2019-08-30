import * as React from 'react';
import './App.css';

import { useCounter } from './temp';
import { IuseCounter } from './temp';

function App(): React.FunctionComponentElement<{}> {
  const {
    count,
    handleIncrementCount,
    handleDecrementCount,
  }: IuseCounter = useCounter(0);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex' }}>
          <button onClick={handleDecrementCount}>-</button>

          <div>{count}</div>

          <button onClick={handleIncrementCount}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
