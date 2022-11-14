import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import bgRandomComputer from "../../../../../bg-random/markus-winkler-_m5JqBg1AMg-unsplash.jpg";
import photoDump from "../../../../../photo-dump/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg";
import moment from "moment";
import axios from "axios";
import {countFriends} from "../FriendsCount/Friends";

function MyUserView() {
    const detailUser = JSON.parse(localStorage.getItem('user'));
    const [myPosts, getMyPosts] = useState([]);
    const [count, setCountFriend] = useState(0);

    useEffect(async () => {
        await axios.get(`/my_posts/${detailUser['username']}`)
            .then((success) => {
                getMyPosts(success.data?.detailUser.posts);
                console.log(success);
            })
            .catch((error) => {
                console.log(error)
            })
    },[]);

    moment.locale('id');

    useEffect(() => {
        countFriends(detailUser['username'])
            .then((success) => {
                setCountFriend(success.data?.countFriends);
                console.log(success);
            })
            .catch((error) => {
                console.log(error)
            })
    },[]);

    const comment = (e) => {
        console.log(e.target);
    };

    return (
        <fragment>
            <Navbar/>
            <div className={"min-h-[565px] bg-white"}>
                <div className={"lg:w-[80%] w-[95%] mx-auto"}>
                    <div className={"h-[405px] bg-yellow-500 rounded-lg overflow-hidden"}>
                        <img className={"w-full h-full object-cover"} src={bgRandomComputer} alt=""/>
                    </div>
                    <div style={{borderBottom : '1px solid #CCCED2'}} className={"min-h-[160px] flex justify-self-center"}>
                        <div className={"flex lg:flex-row w-full gap-2 flex-col"}>
                            <div className={"w-[168px] h-[168px] bg-yellow-500 overflow-hidden rounded-full border-2 border-white lg:mt-[-50px] lg:ml-2 mx-auto mt-[-50px]"}>
                                <img className={"w-full h-full object-center"} src={detailUser['photo_profile']} alt=""/>
                            </div>
                            <div className={"lg:w-[85%] w-full flex lg:mb-0 mb-3 lg:flex-row flex-col justify-between lg:text-start text-center"}>
                                <div className={"lg:mt-3 lg:ml-3"}>
                                    <h1 className={"font-bold text-3xl text-[#050505]"}>{detailUser['name']} <span className={"font-normal"}>( {detailUser['username']} )</span></h1>
                                    <p className={"font-semibold text-[#65676b] text-base mb-10 lg:mb-0"}>{count ? count + ' Teman' : 'Loading'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"min-h-[60px] flex flex-wrap items-center mt-1 gap-1 justify-center lg:justify-start lg:gap-3"}>
                        <button className={"h-[60px] hover:border-b-4 hover:border-[#1876F2] text-[#65676b] p-2 hover:bg-[#F2F2F2] hover:rounded-t-md font-semibold text-sm"}>
                            Postingan
                        </button>
                        <button className={"h-[60px] hover:border-b-4 hover:border-[#1876F2] text-[#65676b] p-2 hover:bg-[#F2F2F2] hover:rounded-t-md font-semibold text-sm"}>
                            Tentang
                        </button>
                        <button className={"h-[60px] hover:border-b-4 hover:border-[#1876F2] text-[#65676b] p-2 hover:bg-[#F2F2F2] hover:rounded-t-md font-semibold text-sm"}>
                            Teman
                        </button>
                        <button className={"h-[60px] hover:border-b-4 hover:border-[#1876F2] text-[#65676b] p-2 hover:bg-[#F2F2F2] hover:rounded-t-md font-semibold text-sm"}>
                            Foto
                        </button>
                        <button className={"h-[60px] hover:border-b-4 hover:border-[#1876F2] text-[#65676b] p-2 hover:bg-[#F2F2F2] hover:rounded-t-md font-semibold text-sm"}>
                            Video
                        </button>
                        <button className={"h-[60px] hover:border-b-4 hover:border-[#1876F2] text-[#65676b] p-2 hover:bg-[#F2F2F2] hover:rounded-t-md font-semibold text-sm"}>
                            Persinggahan
                        </button>
                    </div>
                </div>
            </div>
            <div className={"bg-[#F0F2F5] flex justify-center"}>
                <div className={"lg:w-[65%] w-[80%] flex flex-col lg:flex-row gap-3 justify-center mt-5"}>
                    <div className={"lg:w-[40%] shadow-md pl-4 pt-2 pr-4 rounded-md lg:sticky top-0 w-[99%] h-[350px] bg-white"}>
                        <p className={"font-bold text-xl text-[#050505]"}>Intro</p>
                        <div className={"mt-2 border-b border-[#CED0D4]"}>
                            <p className={"text-sm text-[#050505] text-center mb-2"}>Email : {detailUser['email']}</p>
                        </div>
                        <div className={"mt-3"}>
                            <div className={"flex gap-2 mb-5 items-center"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-[20px] h-[20px] text-[#8C939D]">
                                    <path
                                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"/>
                                    <path
                                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"/>
                                </svg>
                                <p className={"text-[#050505] text-sm"}>Tinggal di <span className={"font-semibold"}>Indonesia</span></p>
                            </div>
                            <div className={"flex gap-2 mb-5 items-center"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-[20px] h-[20px] text-[#8C939D]">
                                    <path fill-rule="evenodd"
                                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <p className={"text-[#050505] text-sm"}>Dari <span className={"font-semibold"}>Jakarta</span></p>
                            </div>
                            <div className={"flex gap-2 mb-5 items-center"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-[20px] h-[20px] text-[#8C939D]">
                                    <path fill-rule="evenodd"
                                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <p className={"text-[#050505] text-sm"}>Bergabung pada Desember 2014</p>
                            </div>
                        </div>
                    </div>

                    <div className={"lg:w-[60%] rounded-md w-[99%] min-h-[1000px] overflow overflow-y-scroll scrollbar-hide"}>
                        <div className={"bg-white p-2 rounded-md"}>
                            <p className={"font-bold text-xl text-[#050505]"}>Postingan</p>
                        </div>

                        {
                            myPosts.length < 1 ?
                                <p>Loading</p>
                                :
                                myPosts.map((myPost) => (
                                    <div className={"rounded-md bg-white mt-3 overflow-hidden"}>
                                        <div className={"h-[50px] p-3 flex items-center gap-2"}>
                                            <div className={"w-[36px] h-[36px] overflow-hidden rounded-full"}>
                                                <img className={"w-full h-full object-center"} src={detailUser['photo_profile']} alt=""/>
                                            </div>
                                            <div>
                                                <p className={"text-[#050505] font-semibold text-sm"}>{detailUser['name']}</p>
                                                <p className={"text-[#65676B] text-xs"}>{moment(new Date(myPost['created_at'])).format('LL')}</p>
                                            </div>
                                        </div>

                                        <div className={"min-h-[56px] p-3 pt-1"}>
                                            <p className={"text-[#050505] text-2xl"}>{myPost.post}</p>

                                            <div className={"mt-1 flex justify-between"}>
                                                <div className={"flex items-center gap-1"}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                         className="w-[18px] h-[18px] text-white bg-[#1198F6] rounded-full p-0.5 cursor-pointer">
                                                        <path
                                                            d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"/>
                                                    </svg>
                                                    <p className={"text-[#65676b] text-sm"}>77</p>
                                                </div>
                                                <p className={"text-[#65676b] text-sm"}>15 Komentar</p>
                                            </div>
                                            <div className={"h-[1px] mt-3 bg-[#CED0D4]"}>

                                            </div>
                                        </div>

                                        <div className={"min-h-[100px] p-3 pt-1 bg-white"}>
                                            <p className={"text-[#65676b] font-semibold text-sm cursor-pointer hover:underline hover:decoration-solid"}>Lihat 14 komentar sebelumnya</p>
                                            <div className={"mt-2 flex items-center gap-2"}>
                                                <div className={"w-[32px] h-[32px] rounded-full overflow-hidden"}>
                                                    <img className={"w-full h-full"} src={photoDump} alt=""/>
                                                </div>
                                                <div className={"max-w-[221px] min-h-[33px] p-2 bg-[#F0F2F5] rounded-lg"}>
                                                    <p className={"text-sm text-[#050505]"}>hahaha gpp ..men uut dwe lah haha</p>
                                                </div>
                                            </div>
                                            <div className={"max-w-[558px] min-h-[36px] mt-2 flex gap-2 items-center"}>
                                                <div className={"w-[32px] h-[32px] rounded-full overflow-hidden"}>
                                                    <img className={"w-full h-full"} src={detailUser['photo_profile']} alt=""/>
                                                </div>
                                                <div className={"max-w-[480px] relative w-full h-[36px]"}>
                                                    <input type="text" placeholder={"Tulis Komentar"} className={"bg-[#F0F2F5] rounded-full p-2 text-sm w-full box-border h-full outline-none border-none"}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>

                </div>
            </div>
        </fragment>
    )
}

export default MyUserView;
