import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '@src/pages/HomePage';

const SecondRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    );
};
const RootRoutes = () => {
    return (
      <Routes>
        <Route path="/error" element={<div>error</div>} />
        <Route path="*" element={<SecondRoutes />} />
      </Routes>
    );
};

export default RootRoutes;
