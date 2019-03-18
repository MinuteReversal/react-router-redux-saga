import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

class App extends Component {
    render() {
        return (
            <Router>
                <Link to="/">Home</Link>
                <Link to="/pagea">PageA</Link>
                <Link to="/pageb">PageB</Link>
                <Route exact path="/" component={Home} />
                <Route path="/pagea" component={PageA} />
                <Route path="/pageb" component={PageB} />
            </Router>
        );
    }
}

export default App;
