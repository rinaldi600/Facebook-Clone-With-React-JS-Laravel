import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import GetUser from "./GetUser";
import Login from "./Login/Login";

function Example() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="about" element={<About />} />
                <Route path="user/:UserId" element={<GetUser />} />
            </Routes>
        </Fragment>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(
        <BrowserRouter>
            <Example />
        </BrowserRouter>,
        document.getElementById('example'));
}
