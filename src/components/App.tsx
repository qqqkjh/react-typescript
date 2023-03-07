import React from 'react';
import RootRouter from '@src/routes';

const App = () => {
    return (
      <React.StrictMode>
        <RootRouter />
      </React.StrictMode>
);
};

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

export default App;
