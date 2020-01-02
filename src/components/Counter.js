import React from 'react';
import { observer } from 'mobx-react';

const Counter = props => (
  <div>
    <h3>Count: {props.counter.count}</h3>
    <button onClick={e => props.counter.increase()}>+</button>
    <button onClick={e => props.counter.decrease()}>-</button>
  </div>
);

export default observer(Counter);
