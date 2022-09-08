import React from "react";
import {closeNavbarSignUp} from '../../../features/showNavbarSignUp';
import { useDispatch } from 'react-redux'

function SignUp() {
    const dispatch = useDispatch();

    return (
        <div className={"fixed inset-0 bg-[#FCFCFD]/75 flex items-center justify-center"}>
            <div className={"min-h-[521px] font-Helvetica mobile:w-[90%] overflow-hidden sm:w-[432px] bg-white shadow-lg rounded-lg"}>
                <div style={{borderBottom : '1px solid #DADDE1'}} className={"h-[82px] flex"}>
                    <div className={"pl-3 w-[50%]"}>
                        <p className={"font-semibold text-[32px]"}>Daftar</p>
                        <p className={"text-sm text-[#606770] -mt-1"}>Ini lebih cepat dan mudah</p>
                    </div>
                    <div className={"grid justify-end w-[50%] pr-2"}>
                        <svg  onClick={() => dispatch(closeNavbarSignUp())}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6 mt-2 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
