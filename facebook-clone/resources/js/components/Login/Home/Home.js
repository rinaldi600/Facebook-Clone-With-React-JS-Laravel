import React, {Fragment, useEffect, useState} from 'react';
import LogoFacebook from '../../../../img/SeekPng.com_logo-facebook-png-transparente_516623 (1).png';

function Home(props) {
    const [user, getUser] = useState({});

    useEffect(() => {

    });

    return (
        <Fragment>
            <div className={"flex min-h-[56px] flex-wrap font-Helvetica bg-red-400"}>
                <div className={"w-[50%] mobile:pt-1 mobile:pb-1 mobile:pr-1 md:w-[25%] gap-2 pl-2 flex flex-wrap items-center bg-yellow-400"}>
                    <div className={"w-[40px] h-[40px]"}>
                        <img src={LogoFacebook} alt=""/>
                    </div>
                    <div>
                        <input className={"h-[40px] mobile:w-full rounded-full p-2 outline-none"} type="text" placeholder={"Cari di Facebook"}/>
                    </div>
                </div>

                <div className={"hidden md:w-[50%] md:flex bg-blue-400"}>

                </div>

                <div className={"w-[50%] md:w-[25%] bg-green-400"}>

                </div>
            </div>
        </Fragment>
    )
}

export default Home
