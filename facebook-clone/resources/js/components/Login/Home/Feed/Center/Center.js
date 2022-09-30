import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {show} from '../../../../../features/showStatusBox';
import StatusBoxModal from "./StatusBoxModal/StatusBoxModal";

function Center(props) {
    const detailUser = useSelector(state => state.detailUserCurrent.value);
    const statusState = useSelector(state => state.showStatus.value);
    const statusUser = useSelector(state => state.getStatus.value);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(statusUser)
    },[statusUser]);

    const showBoxModal = () => {
        dispatch(show());
    };

    return (
        <div className={"bg-[#F0F2F5] min-h-screen pt-5"}>
            <div className={"min-h-[101px] bg-white rounded-lg p-3"}>
                <div style={{borderBottom : '1px solid #E4E6EB'}} className={"mb-2 w-full flex gap-2 p-1 items-center h-[60px]"}>
                    <div className={"w-[40px] h-[40px] rounded-full overflow-hidden"}>
                        <img src={detailUser['photo_profile']} alt=""/>
                    </div>
                    <input value={statusUser.length > 0 ? statusUser : ''} disabled={!!statusState} onClick={showBoxModal} className={"bg-[#F0F2F5] w-[90%] h-[40px] rounded-full text-lg p-2 border-none outline-none cursor-pointer hover:bg-[#E4E6E9]"} placeholder={`Apa yang anda pikirkan, ${detailUser['name'].split(' ')[0]}?`} type="text"/>
                </div>
                <div className={"min-h-[40px] flex justify-around mobile:flex-wrap"}>
                    <button className={"hover:bg-[#F2F2F2] p-2 flex gap-1 items-center hover:rounded-lg"}>
                        <div>
                            <svg fill="currentColor" viewBox="0 0 24 24"
                                 className="b6ax4al1 w-[24px] h-[24px] m4pnbp5e somyomsx ahndzqod ruv4vjns mwtcrujb mx6bq00g text-[#F3425F]">
                                <g fill-rule="evenodd" transform="translate(-444 -156)">
                                    <g>
                                        <path
                                            d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                                            transform="translate(354 158.5)"></path>
                                        <path
                                            d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                                            transform="translate(354 158.5)"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div>
                            <p className={"text-sm font-semibold text-[#65676b]"}>Video Siaran Langsung</p>
                        </div>
                    </button>
                    <button className={"hover:bg-[#F2F2F2] p-2 flex gap-1 items-center hover:rounded-lg"}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-[24px] h-[24px] text-[#45BD62]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                            </svg>
                        </div>
                        <div>
                            <p className={"text-sm font-semibold text-[#65676b]"}>Foto / Video</p>
                        </div>
                    </button>
                    <button className={"hover:bg-[#F2F2F2] p-2 flex gap-1 items-center hover:rounded-lg"}>
                        <div>
                            <svg fill="currentColor" viewBox="0 0 24 24"
                                 className="w-[24px] text-[#F8BD35] h-[24px] b6ax4al1 m4pnbp5e somyomsx ahndzqod dxn77deq mwtcrujb mx6bq00g">
                                <g fill-rule="evenodd" transform="translate(-444 -156)">
                                    <g>
                                        <path
                                            d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
                                            transform="translate(353.5 156.5)"></path>
                                        <path fill-rule="nonzero"
                                              d="M114.024 11.5c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5S96.173 0 102.524 0s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z"
                                              transform="translate(353.5 156.5)"></path>
                                        <path
                                            d="M99.524 8.5c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192"
                                            transform="translate(353.5 156.5)"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div>
                            <p className={"text-sm font-semibold text-[#65676b]"}>Perasaan / Aktivitas</p>
                        </div>
                    </button>
                </div>
            </div>
            { statusState ? <StatusBoxModal/> : '' }
        </div>
    )
}

export default Center;
