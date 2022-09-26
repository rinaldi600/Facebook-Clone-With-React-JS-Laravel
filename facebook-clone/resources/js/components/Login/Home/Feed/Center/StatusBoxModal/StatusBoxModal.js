import React from "react";

function StatusBoxModal(props) {
    return (
        <div className={"fixed bg-[#F3F3F4]/75 inset-0 flex justify-center items-center"}>
           <div className={"lg:w-[500px] min-h-[408px] bg-white shadow-xl rounded-lg overflow-hidden"}>
                <div style={{borderBottom : '1px solid #E5E5E5'}} className={"h-[40px] flex items-center"}>
                    <p className={"text-xl text-[#050505] font-bold"}>Buat Postingan</p>
                    <div className={"w-[24px] h-[24px] rounded-full bg-[#D8DADF]"}>

                    </div>
                </div>
           </div>
        </div>
    );
}

export default StatusBoxModal
