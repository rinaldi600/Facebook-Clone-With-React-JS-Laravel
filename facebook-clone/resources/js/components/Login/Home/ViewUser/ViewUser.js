import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import { createApi } from 'unsplash-js';
import bgRandomComputer from '../../../../../bg-random/markus-winkler-_m5JqBg1AMg-unsplash.jpg';
import photoDump from '../../../../../photo-dump/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg'

function ViewUser(props) {

    const [bgRandom, setRandomBg] = useState('');
    const unsplash = createApi({
        accessKey: 'UR3l5ThucatZkTCoUPxoDM7mvmBW1zUneBD6iRdOrx4',
    });

    useEffect(() => {
        // unsplash.photos.getRandom({
        //
        // }).then((success) => {
        //     console.log(success);
        //     setRandomBg(success.response?.urls.full);
        // }).catch((error) => {
        //     console.log(error)
        // });
        // console.log("WORK")
    }, []);

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

    return (
        <fragment>
            <Navbar/>
            <div className={"min-h-[565px] bg-white"}>
                <div className={"lg:w-[80%] w-[95%] mx-auto"}>
                    <div className={"h-[405px] bg-yellow-500 rounded-lg overflow-hidden"}>
                        <img className={"w-full h-full object-cover"} src={bgRandom ? bgRandom : bgRandomComputer} alt=""/>
                    </div>
                    <div style={{borderBottom : '1px solid #CCCED2'}} className={"min-h-[160px] flex justify-self-center"}>
                        <div className={"flex lg:flex-row w-full gap-2 flex-col"}>
                            <div className={"w-[168px] h-[168px] bg-yellow-500 overflow-hidden rounded-full border-2 border-white lg:mt-[-50px] lg:ml-2 mx-auto mt-[-50px]"}>
                                <img className={"w-full h-full object-center"} src={photoDump} alt=""/>
                            </div>
                            <div className={"lg:w-[85%] w-full flex lg:mb-0 mb-3 lg:flex-row flex-col justify-between lg:text-start text-center"}>
                                <div className={"lg:mt-3 lg:ml-3"}>
                                    <h1 className={"font-bold text-3xl text-[#050505]"}>Lucille J. Tatum</h1>
                                    <p className={"font-semibold text-[#65676b] text-base mb-10 lg:mb-0"}>800 Teman</p>
                                </div>
                                <div className={"flex justify-center gap-2 items-center"}>
                                    <button className={"w-[82px] h-[36px] bg-[#E4E6EB] justify-center rounded-md flex items-center gap-1"}>
                                        <img className={"w-[16px] h-[16px]"} src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/1z-5F6qDswz.png" alt=""/>
                                        <span className={"font-semibold text-[#050505] text-sm"}>Pesan</span>
                                    </button>
                                    <button className={"w-[141px] h-[36px] bg-[#1B74E4] justify-center rounded-md flex items-center gap-1"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="w-[16px] h-[16px] text-white">
                                            <path
                                                d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"/>
                                        </svg>
                                        <span className={"font-semibold text-sm text-white"}>Tambah Teman</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"min-h-[60px]"}>

                    </div>
                </div>
            </div>
        </fragment>
    )
}

export default ViewUser;
