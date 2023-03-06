import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <div>AboutPage</div>
          </Route>
          <Route path="/contact">
            <div>ContactPage</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
