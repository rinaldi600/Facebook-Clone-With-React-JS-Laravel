import React, {Fragment, useEffect, useState} from 'react';
import Navbar from "./Navbar/Navbar";
import Feed from "./Feed/Feed";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {detailUserCurrent} from "../../../getUser/getUserLogin";

function Home(props) {

    const detailUser = useSelector(state => state.detailUserCurrent.value);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {

        axios.get('/get_detail_user')
            .then((response) => {
                setLoading(true);
                dispatch(detailUserCurrent(response.data.userDetail));
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
