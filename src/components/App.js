import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landing_page';

const App = () => (
    <Switch>
        <Route path="/" exact>
            <LandingPage />
        </Route>
        <Route path="/test" exact>
            <div>test</div>
        </Route>
    </Switch>
);

export default App;