import React, {useEffect, useState} from "react";
import LogoFacebook from "../../../../../img/SeekPng.com_logo-facebook-png-transparente_516623 (1).png";
import photoDump from "../../../../../photo-dump/freestocks-8a95EVm0ovQ-unsplash.jpg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";

function getWidthDimension() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function Navbar() {
    const detailUserRedux = useSelector(state => state.detailUserCurrent.value);
    const [detailUser, setDetailUser] = useState('');
    const [modalSearchFriends, setModalSearchFriends] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWidthDimension());
    const [closeModalBox, setCloseModalBox] = useState(0);
    const [modalProfile, setModalProfile] = useState(false);
    const [modalNotifications, setModalNotifications] = useState(false);
    const navigate = useNavigate();
    const [users, searchUser] = useState([]);
    const [status, setStatus] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWidthDimension);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setDetailUser(JSON.parse(window.localStorage.getItem('user')))
    },[]);

    console.log(detailUserRedux);
    const searchFriends = (e) => {
        if (e.target.value !== '') {
            setModalSearchFriends(true);
        } else {
            setModalSearchFriends(false);
        }
        axios.post('/search_user',{
            user : e.target.value
        })
            .then(function (response) {
                setStatus(response.status);
                searchUser(response.data?.test);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                console.log("WORK")
            });
    };

    const logout = () => {
        axios.post('/logout')
            .then((response) => {
                navigate('/');
                window.localStorage.clear();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally((complete) => {
                console.log(complete);
            })
    };

    useEffect(() => {
        if (closeModalBox === 1) {
            return () => {
                setCloseModalBox(0);
            }
        }
    });

    const showProfile = () => {
        setModalProfile(true);
        setCloseModalBox(closeModalBox + 1);

        if (closeModalBox % 2 !== 0) {
            setModalProfile(false);
        }
    };

    const viewUser = (username) => {
        navigate(`/user/${username}`)
    };

    const showNotifications = () => {
        setModalNotifications(true);
        setCloseModalBox(closeModalBox + 1);

        if (closeModalBox % 2 !== 0) {
            setModalNotifications(false);
        }
    };

    const backHome = () => {
        navigate('/home');
    };


    return (
        <div style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}} className={"flex min-h-[56px] flex-wrap font-Helvetica bg-red-400 shadow-md"}>
            <div className={"w-[50%] relative mobile:pt-1 mobile:pb-1 mobile:pr-1 md:w-[25%] gap-2 p-2 flex flex-wrap items-center bg-white"}>
                <div className={`w-[40px] h-[40px]`}>
                    <img onClick={backHome} className={`${modalSearchFriends ? 'hidden' : ''} cursor-pointer`} src={LogoFacebook} alt=""/>
                </div>
                <div className={`${modalSearchFriends ? 'z-50 absolute p-1' : ''}`}>
                    <input onChange={(e) => searchFriends(e)} className={`h-[40px] bg-[#F0F2F5] text-[#65676B] mobile:w-full w-[90%] lg:w-[194px] rounded-full p-2 outline-none`} type="text" placeholder={"Cari di Facebook"}/>
                </div>
                <div className={`w-[90%] rounded-lg overflow-hidden absolute ${modalSearchFriends ? 'block' : 'hidden'} top-16 bg-white shadow-xl overflow-y-scroll scrollbar-hide h-[200px]`}>
                    <div className={"w-full p-2"}>
                        {
                            users.length > 0 ?
                                users.map((user, index)=> (
                                    <div onClick={() => viewUser(user.username)} className={"flex w-full items-center gap-2 mt-3 p-1 rounded-lg hover:bg-[#E3E4E5] cursor-pointer"}>
                                        <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                                            <img className={"w-full h-full"} src={user.photo_profile} alt=""/>
                                        </div>
                                        <p className={"text-[#050505] font-normal text-sm"}>{user.name}</p>
                                    </div>
                                ))
                                :
                                status === 200 ?
                                    <p className={"font-semibold text-base text-center"}>Data Tidak Ditemukan...</p>
                                    :
                                    <p className={"font-semibold text-base text-center"}>Loading...</p>
                        }
                    </div>
                </div>
            </div>

            <div className={"hidden md:w-[50%] md:flex bg-white justify-around items-center"}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-[32px] text-[#65676B] h-[32px] hover:text-[#1B74E4] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-[32px] text-[#65676B] h-[32px] hover:text-[#1B74E4] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-[32px] text-[#65676B] h-[32px] hover:text-[#1B74E4] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-[32px] text-[#65676B] h-[32px] hover:text-[#1B74E4] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                    </svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-[32px] text-[#65676B] h-[32px] hover:text-[#1B74E4] cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                    </svg>
                </div>
            </div>

            <div className={"w-[50%] gap-2 items-center justify-center flex md:w-[25%] bg-white"}>
                <div className={"w-[40px] h-[40px] bg-[#E4E6EB] rounded-full grid justify-center content-center cursor-pointer"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>
                    </svg>
                </div>
                <div onClick={showNotifications} className={"w-[40px] h-[40px] bg-[#E4E6EB] rounded-full grid justify-center content-center cursor-pointer"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/>
                    </svg>
                </div>
                <div onClick={showProfile} className={"w-[40px] h-[40px] rounded-full cursor-pointer overflow-hidden"}>
                    <img src={detailUser?.photo_profile ?? detailUserRedux?.photo_profile} alt=""/>
                </div>
            </div>

            <div style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} className={`mobile:w-full w-[30%] ${windowDimensions.width < 508 ? 'top-[14%]' : ''} ${windowDimensions.width >= 508 && windowDimensions.width <= 767 ? 'top-[8%]' : ''} ${windowDimensions.width >= 767 && windowDimensions.width <= 1023 ? 'top-[15%]' : ''} lg:top-[10%] right-0 ${modalProfile ? '' : 'hidden'} bg-white p-2 min-h-[100px] rounded-lg absolute`}>
                <div style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} className={"w-11/12 mb-5 min-h-[110.662px] bg-white rounded-lg p-4"}>
                    <div style={{borderBottom : '2px solid #CED0D4'}} className={"flex flex-wrap items-center gap-2 pb-4"}>
                        <div className={"w-[40px] h-[40px] rounded-full cursor-pointer overflow-hidden"}>
                            <img className={"w-full h-full"} src={detailUser?.photo_profile ?? detailUserRedux?.photo_profile} alt=""/>
                        </div>
                        <p className={"text-base text-[#050505] mobile:text-xs font-semibold"}>{detailUser?.name ?? detailUserRedux?.name}</p>
                    </div>
                    <p className={"text-[#3889F4] mt-2 text-sm font-medium"}>Lihat Semua Profil</p>
                </div>
                <button onClick={logout} className={"w-full p-2 rounded-lg  flex gap-2 hover:bg-[#E4E6E9] items-center"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-[30px] h-[30px]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                    </svg>
                    <div>
                        <span className={"text-[#050505] text-sm font-semibold"}>Keluar</span>
                    </div>
                </button>
            </div>

            <div style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} className={`mobile:w-full w-[30%] ${windowDimensions.width < 508 ? 'top-[14%]' : ''} ${windowDimensions.width >= 508 && windowDimensions.width <= 767 ? 'top-[8%]' : ''} ${windowDimensions.width >= 767 && windowDimensions.width <= 1023 ? 'top-[15%]' : ''} lg:top-[10%] right-0 ${modalNotifications ? '' : 'hidden'} bg-white z-50 p-2 min-h-[100px] rounded-lg absolute`}>
                <p className={"text-2xl font-bold"}>Notifikasi</p>
                <div className={"w-full p-2"}>
                    <div className={"flex w-full items-center gap-2"}>
                        <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                            <img className={"w-full h-full"} src={photoDump} alt=""/>
                        </div>
                        <p className={"text-[#050505] font-normal text-sm"}><span className={"font-semibold"}>Shane M. Heatherly</span>, mengomentari postingan anda</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
