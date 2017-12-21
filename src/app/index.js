import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
//routing components
import { BrowserRouter } from 'react-router-dom';
import {Router, Route} from 'react-router';

import store from "./store";
import App from "./main";

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    window.document.getElementById('app'));