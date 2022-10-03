import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";


function LeftNavbar(props) {

    const detailUser = useSelector(state => state.detailUserCurrent.value);
    const [showMore, setShowMore] = useState(false);


    const showMoreClick = () => {
      setShowMore(true);
    };

    const showLessClick = () => {
        setShowMore(false);
    };

    return (
        <div className={"h-screen overflow-y-scroll bg-[#F0F2F5] scrollbar-hide"}>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] mt-4 gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                    <img src={detailUser['photo_profile']} alt=""/>
                </div>
                <p className={"text-sm font-medium"}>{detailUser['name']}</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>Teman</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>Marketplace</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>Grup</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>Watch</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                    <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>Kenangan</p>
            </div>

            <div className={`${showMore ? '' : 'hidden'}`}>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Acara</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/WcCzeboYevF.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Aktivitas Iklan Terkini</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>COVID-19: Pusat Informasi</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Zy9sJGThmCS.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Favorit</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Halaman</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/GyZZ7Jrr5OV.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Kesehatan Mental</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/XEWvxf1LQAG.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Mainkan Game</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Messenger</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/HBcx-giUZ2Y.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Messenger Kids</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/y7p-dcTnGV_.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Penanggulangan Krisis</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/x1JqqPh_PS1.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Pengelola Bisnis</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/qR88GIDM38e.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Pengelola Iklan</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/A2tHTy6ibgT.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Penggalangan Dana</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Pusat Iklan</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Pusat Info Perubahan Iklim</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='	https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Terbaru</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Tersimpan</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Video Game</p>
                </div>
                <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GmeV2VDbZTi.png' alt=""/>
                    </div>
                    <p className={"text-sm font-medium"}>Video Siaran Langsung</p>
                </div>
                <div onClick={showLessClick} className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                    <div className={"w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#D8DADF] overflow-hidden"}>
                        <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"
                             className="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk dmdr2h6l kgzac55p">
                            <path
                                d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path>
                        </svg>
                    </div>
                    <p className={"text-sm font-medium"}>Lihat Lebih Sedikit</p>
                </div>
            </div>

            <div onClick={showMoreClick} className={`min-h-[48px] ${showMore ? 'hidden' : 'flex flex-wrap'} hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer items-center`}>
                <div className={"w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#D8DADF] overflow-hidden"}>
                    <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                         className="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk dmdr2h6l kgzac55p">
                        <g fill-rule="evenodd" transform="translate(-448 -544)">
                            <path fill-rule="nonzero"
                                  d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                        </g>
                    </svg>
                </div>
                <p className={"text-sm font-medium"}>Lihat Lainnya</p>
            </div>

            <div style={{borderBottom : '1px solid #CED0D4'}} className={"h-[1px] mt-3 mb-2 w-11/12 mx-auto"}>

            </div>

            <p className={"pl-2 text-[#65676b] text-base font-semibold mt-3 mb-3"}>Pintasan Anda</p>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-lg overflow-hidden"}>
                    <img src='https://scontent.fsrg7-1.fna.fbcdn.net/v/t39.30808-6/301120520_621500392832173_3419125554319852132_n.jpg?stp=c53.0.64.64a_cp0_dst-jpg_p64x64&_nc_cat=108&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=qBA3LhdknoUAX-msFSh&_nc_ht=scontent.fsrg7-1.fna&oh=00_AT_-OF5N7k0OGJK0YvkmWh6h9oYi5eKGpkoQo3MudKo_sw&oe=63354A01' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>Pahe.in Official Group</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-lg overflow-hidden"}>
                    <img src='https://scontent.fsrg7-1.fna.fbcdn.net/v/t1.6435-9/61250942_924293234569550_8468045979940028416_n.jpg?stp=c7.0.64.64a_cp0_dst-jpg_p64x64&_nc_cat=107&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=3FPXxHBSO6AAX-7TnHP&_nc_ht=scontent.fsrg7-1.fna&oh=00_AT-r6LFUNAGNvpCyxBeP9QNTuAplJMQSRju_Mxdlzvtxeg&oe=6354676B' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>Keluh Kesah di Kost-Kostan</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-lg overflow-hidden"}>
                    <img src='https://scontent.fsrg7-1.fna.fbcdn.net/v/t1.6435-9/36307593_2509485379077115_7989337721220890624_n.jpg?stp=c25.0.64.64a_cp0_dst-jpg_p64x64&_nc_cat=100&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=5dpZjwMqzHsAX8r_rYr&_nc_ht=scontent.fsrg7-1.fna&oh=00_AT_kNoHl-Qn5xdaEYjveGXPo68_9cB9N7sZ9bPWHxnBPmA&oe=63566309' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>Info Kost Semarang</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-lg overflow-hidden"}>
                    <img src='https://scontent.fsrg7-1.fna.fbcdn.net/v/t1.6435-9/66094405_1365718120260464_846069443044835328_n.jpg?stp=c24.0.64.64a_cp0_dst-jpg_p64x64&_nc_cat=102&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=LJcPlyIesw8AX9ln9bT&_nc_ht=scontent.fsrg7-1.fna&oh=00_AT-815gT-KmSqTKSDkNqfD_-VMfa2w2pITqXl_945lA8eA&oe=63536931' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>DJAKARTA GADGET STORE</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-lg overflow-hidden"}>
                    <img src='https://scontent.fsrg7-1.fna.fbcdn.net/v/t1.6435-9/90124701_1345520445637713_6479714363727937536_n.jpg?stp=c30.0.64.64a_cp0_dst-jpg_p64x64&_nc_cat=107&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=hhVA0TRoXxMAX_f_eI0&_nc_ht=scontent.fsrg7-1.fna&oh=00_AT8OlYRCJ_bWxJzvBy7rYK2YnOHOI49QD2R6oGofXBn2xA&oe=63568460' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>☆KPN TUNNEL LOVER'S☆</p>
            </div>
            <div className={"min-h-[48px] hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer flex flex-wrap items-center"}>
                <div className={"w-[36px] h-[36px] rounded-lg overflow-hidden"}>
                    <img src='https://scontent.fsrg7-1.fna.fbcdn.net/v/t1.18169-9/10940495_10203759359134829_8381209416561449169_n.jpg?stp=c44.0.64.64a_cp0_dst-jpg_p64x64&_nc_cat=111&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=Y2q2Yidx6-gAX_z7O_f&_nc_ht=scontent.fsrg7-1.fna&oh=00_AT_P7JlaSuJ-xvkRgETD-2Hd9a14jk7LuJCm-C10fs5gXg&oe=6353AFEE' alt=""/>
                </div>
                <p className={"text-sm font-medium"}>Jual Beli Buku, Majalah, Novel, Komik.</p>
            </div>
            <div className={`min-h-[48px] ${showMore ? 'hidden' : 'flex flex-wrap'} hover:bg-[#E4E6E9] gap-2 pl-2 cursor-pointer items-center`}>
                <div className={"w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#D8DADF] overflow-hidden"}>
                    <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                         className="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk dmdr2h6l kgzac55p">
                        <g fill-rule="evenodd" transform="translate(-448 -544)">
                            <path fill-rule="nonzero"
                                  d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                        </g>
                    </svg>
                </div>
                <p className={"text-sm font-medium"}>Lihat Lainnya</p>
            </div>

            <div style={{borderBottom : '1px solid #CED0D4'}} className={"h-[1px] mb-2 w-11/12 mx-auto"}>

            </div>

            <div className={"w-11/12 mx-auto"}>
                <ul>
                    <li className={"inline-block mr-1"}>
                        <p className={"text-xs text-[#65676b] font-normal"}>Privasi</p>
                    </li>
                    <li className={"inline-block mr-1"}>
                        <p className={"text-xs text-[#65676b] font-normal"}>Ketentuan</p>
                    </li>
                    <li className={"inline-block mr-1"}>
                        <p className={"text-xs text-[#65676b] font-normal"}>Iklan</p>
                    </li>
                    <li className={"inline-block mr-1"}>
                        <p className={"text-xs text-[#65676b] font-normal"}>Pilihan Iklan</p>
                    </li>
                    <li className={"inline-block mr-1"}>
                        <p className={"text-xs text-[#65676b] font-normal"}>Cookie</p>
                    </li>
                    <li className={"inline-block mr-1"}>
                        <p className={"text-xs text-[#65676b] font-normal"}>Lainnya</p>
                    </li>
                    <li className={"inline-block mr-1"}>
                        <p className={"text-xs text-[#65676b] font-normal"}>Meta &copy; 2022</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftNavbar;
