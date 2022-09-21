import React from "react";
import LeftNavbar from "./LeftNavbar/LeftNavbar";

function Feed(props) {
    return (
        <div className={"flex min-h-screen bg-red-300"}>
            <div className={"lg:w-[25%] lg:block hidden bg-yellow-400"}>
                <LeftNavbar/>
            </div>
            <div className={"lg:w-[50%] md:w-[60%] w-[100%] bg-green-500"}>
                <p>TEST</p>
            </div>
            <div className={"lg:w-[25%] md:w-[40%] md:block hidden bg-blue-300"}>
                <p>TEST</p>
            </div>
        </div>
    );
}

export default Feed;
