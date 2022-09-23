import React from "react";
import LeftNavbar from "./LeftNavbar/LeftNavbar";
import {useSelector} from "react-redux";

function Feed(props) {

    const detailUser = useSelector(state => state.detailUserCurrent.value);

    return (
        <div className={"flex min-h-screen bg-red-300"}>
            <div className={"lg:w-[25%] lg:block hidden bg-yellow-400"}>
                <LeftNavbar/>
            </div>
            <div className={"lg:w-[50%] md:w-[60%] w-[100%] bg-green-500"}>
                <p>TESsT</p>
            </div>
            <div className={"lg:w-[25%] md:w-[40%] md:block hidden bg-blue-300"}>
                <p>TEST</p>
            </div>
        </div>
    );
}

export default Feed;
