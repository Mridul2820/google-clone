import React from 'react'
import Home from './pages/Home'
import './styles/app.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="search">
                        Google Search
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App