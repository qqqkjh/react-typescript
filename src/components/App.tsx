import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <div>HomePage</div>
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
