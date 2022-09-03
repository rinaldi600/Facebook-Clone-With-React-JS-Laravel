import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import GetUser from "./GetUser";

function Example() {
    return (
        <div className="container">
            <Link to="/about">About</Link>
            <Link to="/user/hendra">Hendra</Link>
            <Routes>
                <Route path="about" element={<About />} />
                <Route path="user/:UserId" element={<GetUser />} />
            </Routes>
        </div>
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
