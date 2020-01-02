import React from 'react';

import CounterModel from '../models/Counter';
import Counter from '../components/Counter';

export default () => (
  <div>
    <Counter counter={new CounterModel()} />
  </div>
);
