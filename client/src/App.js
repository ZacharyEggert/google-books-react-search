import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Navigation from './components/Navigation';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>

                <Route path="/saved" component={Saved} />

                <Route path="/" component={Search} />

            </Switch>

        </Router>
    )
}

export default App;