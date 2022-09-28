import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {close} from '../../../../../../features/showStatusBox';

function StatusBoxModal(props) {
    const detailUser = useSelector(state => state.detailUserCurrent.value);
    const statusState = useSelector(state => state.showStatus.value);
    const dispatch = useDispatch();
    const [isScroll, setScroll] = useState(false);

    const checkScrollBar = (e) => {
        if (e.target.value.length >= 591) {
            setScroll(true);
        } else {
            setScroll(false);
        }
        console.log(e.target.value.length);
    };

    return (
        <div className={"fixed bg-[#F3F3F4]/75 inset-0 flex justify-center items-center"}>
           <div className={"lg:w-[500px] md:w-[60%] sm:w-[65%] w-[75%] min-h-[408px] bg-white shadow-xl rounded-lg overflow-hidden"}>
                <div style={{borderBottom : '1px solid #E5E5E5'}} className={"h-[40px] p-1 justify-between flex justify-center items-center"}>
                    <p className={"text-xl text-[#050505] font-bold mx-auto"}>Buat Postingan</p>
                    <div onClick={() => dispatch(close())} className={"w-[24px] h-[24px] rounded-full bg-[#D8DADF] cursor-pointer"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                </div>
               <div className={"min-h-[368px] bg-blue-300"}>
                    <div className={"min-h-[40px] bg-white flex gap-2 p-4"}>
                        <div className={"w-[40px] h-[40px] rounded-full overflow-hidden"}>
                            <img src={detailUser['photo_profile']} alt=""/>
                        </div>
                        <div>
                            <p className={"text-sm font-semibold"}>{detailUser['name']}</p>
                            <button className={"w-[65px] h-[14px] flex items-center gap-1 justify-center p-2 rounded-md mt-1 bg-[#E4E6EB] text-xs font-semibold"}>
                                <img className={"w-[12px] h-[12px]"} src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/L39Daxsxmmw.png" alt=""/>
                                Publik
                            </button>
                        </div>
                    </div>
                   <div className={"min-h-[328px] bg-white pr-4 pl-4"}>
                       <textarea onChange={(e) => checkScrollBar(e)} placeholder={`Apa yang anda pikirkan, ${detailUser['name'].split(' ')[0]}?`} className={`scrollbar-hide bg-grey-100 ${isScroll ? 'text-sm' : 'text-2xl' } min-h-[200px] w-full outline-none border-none`} name="status" id="" cols="30" >

                       </textarea>
                       <div style={{border : '1px solid #D0D2D6'}} className={"rounded-lg min-h-[58px]"}>

                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default StatusBoxModal
