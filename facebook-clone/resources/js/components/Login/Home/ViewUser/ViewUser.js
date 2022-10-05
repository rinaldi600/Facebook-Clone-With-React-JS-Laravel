import React, {useEffect} from "react";
import Navbar from "../Navbar/Navbar";

function ViewUser(props) {

    useEffect(() => {
        // axios.get(`/user_profile/${username}`)
        //     .then(function (response) {
        //         console.log(response);
        //
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        //     .finally(function () {
        //         console.log("WORK")
        //     });
        console.log("WORK")
    });

    return (
        <fragment>
            <Navbar/>
            <h1>wORK</h1>
        </fragment>
    )
}

export default ViewUser;
