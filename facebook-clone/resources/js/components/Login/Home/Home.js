import React, {Fragment, useEffect, useState} from 'react';
import Navbar from "./Navbar/Navbar";
import Feed from "./Feed/Feed";
import {useDispatch} from "react-redux";
import axios from "axios";
import {detailUserCurrent} from "../../../getUser/getUserLogin";

function Home(props) {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/get_detail_user')
            .then((response) => {
                dispatch(detailUserCurrent(response.data.userDetail));
                setLoading(true);
                let detailUser = Object.assign({}, response.data.userDetail);
                delete detailUser.password;
                window.localStorage.setItem('user', JSON.stringify(detailUser));
            })
            .catch((error) => {
                setLoading(true);
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    },[]);

    return (
        <Fragment>
            <Navbar/>
            <Feed/>
        </Fragment>
    )
}

export default Home
