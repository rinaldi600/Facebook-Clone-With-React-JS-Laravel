import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import store from "../app/store";
import {Provider} from "react-redux";
import Home from "./Login/Home/Home";

function Example() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Fragment>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Example />
            </BrowserRouter>
        </Provider>,
        document.getElementById('example'));
}
