import React, {Fragment, useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {show} from '../../../../../features/showStatusBox';
import StatusBoxModal from "./StatusBoxModal/StatusBoxModal";
import axios from "axios";
import * as moment from "moment";

function Center(props) {
    const detailUser = useSelector(state => state.detailUserCurrent.value);
    const statusState = useSelector(state => state.showStatus.value);
    const statusUser = useSelector(state => state.getStatus.value);
    const [notificationComment, setNotificationComment] = useState(false);
    const [postFriends, setPostFriends] = useState([]);
    const [listComments, setListComments] = useState([]);
    const dispatch = useDispatch();
    const statusValidation = useSelector(state => state.validation.status);
    const [pagination, setPagination] = useState([]);

    const showBoxModal = () => {
        dispatch(show());
    };

    const getPosts = async () => {
        return await axios.get(`/get_my_posts/${detailUser?.username}`);
    };

    moment.locale('id');

    useEffect(() => {
        if (detailUser?.username !== undefined) {
            getPosts()
                .then((success) => {
                    for (const x in success.data.postsFriend) {
                        for (const y in success.data.postsFriend[x]?.users_friend?.posts) {
                            setPostFriends(prevArray => [...prevArray, success.data.postsFriend[x]?.users_friend?.posts[y]]);
                            setPagination(prevState => [...prevState, {
                                idPost : success.data.postsFriend[x]?.users_friend?.posts[y].id_post,
                                skip : 0,
                                take : 1
                            }])
                        }
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [detailUser?.username]);

    const comment = (e, idPost) => {
        if (e.keyCode === 13) {
            axios.post('/get_comments_user', {
                commentUser : e.target.value,
                idPost : idPost,
                username : detailUser?.username,
            })
                .then((success) => {
                    if (success.status === 200) {
                        e.target.value = '';
                        setNotificationComment(true);
                    }
                    setTimeout(() => {
                        setNotificationComment(false);
                    }, 2000);
                    console.log(success);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const showMoreComments = (idPost) => {

        setListComments([]);

        for (const x in pagination) {
            if (pagination[x].idPost === idPost) {
                pagination[x].skip = pagination[x].skip + 1;
                pagination[x].take = pagination[x].take + 1;
                axios.get(`/get_more_comments/${idPost}/${pagination[x].skip}/${pagination[x].take}`)
                    .then((success) => {
                        for (const x in success.data.test) {
                            setListComments(prevState => [...prevState, success.data.test[x]]);
                        }
                        console.log(success);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }

    };

    console.log(listComments);

    return (
        <div className={"bg-[#F0F2F5] relative scrollbar-hide h-screen pt-5 p-2 overflow-y-scroll"}>

            <div className={`bg-[#E9F7EE] ${notificationComment ? 'flex' : 'hidden'} p-1 items-center gap-1 border-2 border-[#E3F2E6] absolute inset-x-0 top-0 mx-auto mt-3 z-[50] min-h-[50px] rounded-md shadow-2xl max-w-[500px]`}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#3FB660]">
                        <path fill-rule="evenodd"
                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                              clip-rule="evenodd"/>
                    </svg>
                </div>
                <p className={"font-bold text-[#5E6866]"}>Berhasil berkomentar....</p>
            </div>

            <div className={"min-h-[101px] md:w-[90%] bg-white rounded-lg p-3"}>
                <div style={{borderBottom : '1px solid #E4E6EB'}} className={"mb-2 w-full flex gap-2 p-1 items-center h-[60px]"}>
                    <div className={"w-[40px] h-[40px] rounded-full overflow-hidden"}>
                        <img className={"w-full h-full"} src={detailUser['photo_profile']} alt=""/>
                    </div>
                    <input value={statusUser.length > 0 ? statusUser : ''} disabled={!!statusState} onClick={showBoxModal} className={`${statusValidation ? 'border-2 border-red-500' : 'border-none'} bg-[#F0F2F5] w-[90%] h-[40px] rounded-full text-lg p-2 outline-none cursor-pointer hover:bg-[#E4E6E9] border-2 border-red-500`} placeholder={`Apa yang anda pikirkan, ${detailUser['name'].split(' ')[0]}?`} type="text"/>
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

            {
                postFriends.length <= 0 ?
                    <p>Tidak Ada Postingan</p>
                    :
                    postFriends.map((post) => (
                        <div className={"rounded-md md:w-[90%] bg-white mt-3 overflow-hidden"}>
                            <div className={"h-[50px] p-3 flex items-center gap-2"}>
                                <div className={"w-[36px] h-[36px] overflow-hidden rounded-full"}>
                                    <img className={"w-full h-full object-center"} src={post.users?.photo_profile} alt=""/>
                                </div>
                                <div>
                                    <p className={"text-[#050505] font-semibold text-sm"}>{post.users?.name}</p>
                                    <p className={"text-[#65676B] text-xs"}>{moment(post.created_at).format('LL')}</p>
                                </div>
                            </div>

                            <div className={"min-h-[56px] p-3 pt-1"}>
                                <p className={"text-[#050505] text-2xl"}>{post.post}</p>

                                <div className={"mt-1 flex justify-between"}>
                                    <div className={"flex items-center gap-1"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="w-[18px] h-[18px] text-white bg-[#1198F6] rounded-full p-0.5 cursor-pointer">
                                            <path
                                                d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"/>
                                        </svg>
                                        <p className={"text-[#65676b] text-sm"}>77</p>
                                    </div>
                                    <p className={"text-[#65676b] text-sm"}>{post.comments.length} Komentar</p>
                                </div>
                                {
                                    post.comments.length <= 0 ?
                                        ''
                                        :
                                        <div className={"h-[1px] mt-3 bg-[#CED0D4]"}>

                                        </div>
                                }
                            </div>

                            <div className={`${post.comments.length <= 0 ? 'min-h-fit' : 'min-h-[100px]'} p-3 pt-1 bg-white`}>
                                {
                                    post.comments.length <= 0 ?
                                        ''
                                        :
                                        <Fragment>
                                            <p onClick={() => showMoreComments(post.id_post)} className={`text-[#65676b] font-semibold text-sm cursor-pointer hover:underline hover:decoration-solid`}>Lihat komentar sebelumnya</p>
                                            <div className={`${listComments.length <= 0 ? 'flex' : 'hidden'} mt-2 items-center gap-2`}>
                                                <div className={"w-[32px] h-[32px] rounded-full overflow-hidden"}>
                                                    <img className={"w-full h-full"} src={post.comments[0].users?.photo_profile} alt=""/>
                                                </div>
                                                <div className={"max-w-[221px] min-h-[33px] p-2 bg-[#F0F2F5] rounded-lg"}>
                                                    <p className={"text-sm text-[#050505]"}>{post.comments[0].comment}</p>
                                                </div>
                                            </div>
                                            <>
                                                {
                                                    listComments.length <= 0 ?
                                                        ''
                                                        :
                                                        listComments[0].id_post === post.id_post ?
                                                            listComments.map((commentUser) => (
                                                                <div className={"mt-2 flex items-center gap-2"}>
                                                                    <div className={"w-[32px] h-[32px] rounded-full overflow-hidden"}>
                                                                        <img className={"w-full h-full"} src={commentUser.users?.photo_profile} alt=""/>
                                                                    </div>
                                                                    <div className={"max-w-[221px] min-h-[33px] p-2 bg-[#F0F2F5] rounded-lg"}>
                                                                        <p className={"text-sm text-[#050505]"}>{commentUser.comment}</p>
                                                                    </div>
                                                                </div>
                                                            ))
                                                            :
                                                            <Fragment>
                                                                <div className={`flex mt-2 items-center gap-2`}>
                                                                    <div className={"w-[32px] h-[32px] rounded-full overflow-hidden"}>
                                                                        <img className={"w-full h-full"} src={post.comments[0].users?.photo_profile} alt=""/>
                                                                    </div>
                                                                    <div className={"max-w-[221px] min-h-[33px] p-2 bg-[#F0F2F5] rounded-lg"}>
                                                                        <p className={"text-sm text-[#050505]"}>{post.comments[0].comment}</p>
                                                                    </div>
                                                                </div>
                                                            </Fragment>
                                                }
                                            </>
                                        </Fragment>
                                }
                                <div className={"max-w-[900px] min-h-[36px] mt-2 flex gap-2 items-center"}>
                                    <div className={"w-[32px] h-[32px] rounded-full overflow-hidden"}>
                                        <img className={"w-full h-full"} src={detailUser['photo_profile']} alt=""/>
                                    </div>
                                    <div className={"max-w-[900px] relative w-full h-[36px]"}>
                                        <input type="text" onKeyUp={(e) => comment(e,post.id_post)} placeholder={"Tulis Komentar"} className={"bg-[#F0F2F5] rounded-full p-2 text-sm w-full box-border h-full outline-none border-none"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
            }

        </div>
    )
}

export default Center;
