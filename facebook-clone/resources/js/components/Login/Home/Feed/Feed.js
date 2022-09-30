import React from "react";
import LeftNavbar from "./LeftNavbar/LeftNavbar";
import Center from "./Center/Center";
import RightNavbar from "../RightNavbar/RightNavbar";

function Feed(props) {

    return (
        <div className={"flex min-h-screen bg-red-300"}>
            <div className={"lg:w-[25%] lg:block hidden"}>
                <LeftNavbar/>
            </div>
            <div className={"lg:w-[50%] md:w-[60%] w-[100%]"}>
                <Center/>
            </div>
            <div className={"lg:w-[25%] md:w-[40%] md:block hidden bg-blue-300"}>
                <RightNavbar/>
            </div>
        </div>
    );
}

export default Feed;
