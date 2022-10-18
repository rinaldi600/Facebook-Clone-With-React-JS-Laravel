import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {close} from '../../../../../../features/showStatusBox';
import {getStatusUser} from '../../../../../../features/getStatusUser';
import {setValidation} from '../../../../../../features/validationStatusUser';

function StatusBoxModal(props) {
    const detailUser = useSelector(state => state.detailUserCurrent.value);
    const statusUser = useSelector(state => state.getStatus.value);
    const statusValidation = useSelector(state => state.validation.status);
    const messageValidation = useSelector(state => state.validation.messageUser);
    const dispatch = useDispatch();
    const [isScroll, setScroll] = useState(false);
    const [background, setBackground] = useState(false);

    const checkScrollBar = (e) => {
        if (e.target.value.length >= 591) {
            setScroll(true);
        } else {
            setScroll(false);
        }

        if (e.target.value.length > 0) {
            setBackground(true)
        } else {
            setBackground(false);
        }

        dispatch(getStatusUser(e.target.value))
    };

    const createStatus = () => {
        if (statusUser === '') {
            dispatch(setValidation({
                message : 'Wajib Diisi',
                    status : true
                }))
        } else {

            dispatch(setValidation({
                message : '',
                status : false
            }));

            axios.post('/create_status_user', {
                status: statusUser,
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            dispatch(close());
            dispatch(getStatusUser(''))
        }
    };

    return (
        <div className={"fixed bg-[#F3F3F4]/75 inset-0 flex z-50 justify-center items-center"}>
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
                       <textarea value={statusUser.length > 0 ? statusUser : ''} onChange={(e) => checkScrollBar(e)} placeholder={`Apa yang anda pikirkan, ${detailUser['name'].split(' ')[0]}?`} className={`scrollbar-hide bg-grey-100 ${isScroll ? 'text-sm' : 'text-2xl' } min-h-[200px] w-full outline-none ${statusValidation ? 'border-2 border-red-500' : 'border-none'}`} name="status" id="" cols="30" >

                       </textarea>
                       <p className={`text-sm text-[#e11d48] ${statusValidation ? 'block' : 'hidden'} mb-2`}>{messageValidation}</p>
                       <div style={{border : '1px solid #D0D2D6'}} className={"rounded-lg min-h-[58px] justify-between p-2 flex items-center"}>
                            <p className={"font-semibold text-sm text-[050505]"}>Tambahkan ke Postingan Anda</p>

                           <div className={"flex gap-2 flex-wrap"}>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-[32px] cursor-pointer h-[32px] text-[#45BD62]">
                                   <path stroke-linecap="round" stroke-linejoin="round"
                                         d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                               </svg>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-[32px] cursor-pointer h-[32px] text-[#1877F2]">
                                   <path stroke-linecap="round" stroke-linejoin="round"
                                         d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                               </svg>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-[32px] h-[32px] text-[#F7B928]">
                                   <path stroke-linecap="round" stroke-linejoin="round"
                                         d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/>
                               </svg>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-[32px] h-[32px] cursor-pointer text-[#F5533D]">
                                   <path stroke-linecap="round" stroke-linejoin="round"
                                         d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                   <path stroke-linecap="round" stroke-linejoin="round"
                                         d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                               </svg>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" className="w-[32px] h-[32px] cursor-pointer text-[#39AFD5]">
                                   <path stroke-linecap="round" stroke-linejoin="round"
                                         d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"/>
                               </svg>
                           </div>
                       </div>
                       <div className={"bg-white mt-3 mb-3"}>
                           <button onClick={createStatus} className={`${background ? 'bg-[#1B74E4] text-white' : 'bg-[#E4E6EB] text-[#BCC0C4]'} font-semibold w-full rounded-lg h-[36px]`}>Kirim</button>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default StatusBoxModal
