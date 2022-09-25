import React, {useEffect} from "react";
import {useSelector} from "react-redux";

function Center(props) {
    const detailUser = useSelector(state => state.detailUserCurrent.value);

    useEffect(() => {
        console.log(detailUser)
    },[detailUser]);

    return (
        <div className={"bg-[#F0F2F5] min-h-screen pt-5"}>
            <div className={"h-[101px] bg-white rounded-lg p-3"}>
                <div style={{borderBottom : '1px solid #E4E6EB'}} className={"w-full flex gap-2 p-1 items-center h-[60px]"}>
                    <div className={"w-[40px] h-[40px] rounded-full overflow-hidden"}>
                        <img src={detailUser['photo_profile']} alt=""/>
                    </div>
                    <input className={"bg-[#F0F2F5] w-[90%] h-[40px] rounded-full text-lg p-2 border-none outline-none cursor-pointer hover:bg-[#E4E6E9]"} placeholder={`Apa yang anda pikirkan, ${detailUser['name'].split(' ')[0]}?`} type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Center;
