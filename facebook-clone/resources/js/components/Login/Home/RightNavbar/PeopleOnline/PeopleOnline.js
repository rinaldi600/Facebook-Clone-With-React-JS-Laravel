import React from "react";

function PeopleOnline(props) {
    return (
        <div className={"flex items-center gap-4 hover:bg-[#E4E6E9] cursor-pointer relative pb-1 pl-1 rounded-lg pt-1"}>
            <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                <img className={"w-full h-full"} src={props.image} alt=""/>
                <div style={{border : '2px solid white'}} className={"w-[10px] bg-[#31A24C] h-[10px] rounded-full absolute bottom-1 left-8 z-50"}>
                </div>
            </div>
            <p className={"text-[#050505] text-sm font-medium"}>{props.name}</p>
        </div>
    )
}

export default PeopleOnline;
