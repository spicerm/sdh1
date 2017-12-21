import React from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import { Switch, Route, Link} from "react-router-dom";

//Import Components
import Header from "./components/header";
import Home from "./components/home";

const App = () => 
    <div>
        <Switch>
            <Route path="/" component ={Home}/>
        </Switch>
    </div>

export default App;