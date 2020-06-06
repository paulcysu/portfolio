import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'components/Home/Home.js';

const App = () => (
    <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/test" exact>
            <div>test</div>
        </Route>
    </Switch>
);

export default App;