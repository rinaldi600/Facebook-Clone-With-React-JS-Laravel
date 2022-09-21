import React, {Fragment, useEffect, useState} from 'react';
import Navbar from "./Navbar/Navbar";
import Feed from "./Feed/Feed";

function Home(props) {

    return (
        <Fragment>
            <Navbar/>
            <Feed/>
        </Fragment>
    )
}

export default Home
