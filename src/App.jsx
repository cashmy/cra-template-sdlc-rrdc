import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { PageTwo } from './pages/Page2';

const App = () => (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="page2" exact element={<PageTwo />} />
    </Routes>
);

export default App;
