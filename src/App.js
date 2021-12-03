import React from 'react';
import Counter from './components/Counter';
import Receipts from './components/Receipts';

import CarouselTest from './components/JS14Carousel';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div>
      <CarouselTest />
      <Counter />
      <Receipts />
    </div>
  );
};

export default App;
