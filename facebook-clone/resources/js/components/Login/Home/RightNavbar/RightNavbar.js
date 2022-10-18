import React from "react";
import pictureDump0 from '../../../../../photo-dump/freestocks-8a95EVm0ovQ-unsplash.jpg';
import pictureDump1 from '../../../../../photo-dump/albert-dera-ILip77SbmOE-unsplash.jpg';
import pictureDump2 from '../../../../../photo-dump/austin-wade-X6Uj51n5CE8-unsplash.jpg';
import pictureDump3 from '../../../../../photo-dump/behrouz-sasani-xUo4xFp9l64-unsplash.jpg';
import pictureDump4 from '../../../../../photo-dump/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import pictureDump5 from '../../../../../photo-dump/dan-asaki-CG6Wo4Ac4uc-unsplash.jpg';
import pictureDump6 from '../../../../../photo-dump/derick-mckinney-QuwQYDBI6sI-unsplash.jpg';
import pictureDump7 from '../../../../../photo-dump/duman-photography-w3JKo9UgXFY-unsplash.jpg';
import pictureDump8 from '../../../../../photo-dump/engin-akyurt-GQeHbaf05Z0-unsplash.jpg';
import pictureDump9 from '../../../../../photo-dump/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg';
import pictureDump10 from '../../../../../photo-dump/oliver-johnson-yH0dth2yEQE-unsplash.jpg';
import pictureDump11 from '../../../../../photo-dump/philipp-wuthrich-5n3JP9WAJTs-unsplash.jpg';
import pictureDump12 from '../../../../../photo-dump/stephan-louis-L3s5QySz5UM-unsplash.jpg';
import pictureDump13 from '../../../../../photo-dump/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg';
import PeopleOnline from "./PeopleOnline/PeopleOnline";

function RightNavbar(props) {
    return (
        <div className={"bg-[#F0F2F5] overflow-y-scroll scrollbar-hide h-screen pt-5"}>
            <div className={"flex items-center justify-between"}>
                <p className={"text-[#65676b] text-base font-semibold"}>Halaman dan profil anda</p>
                <div className={"cursor-pointer hover:bg-[#E4E6E9] w-[24px] h-[24px] flex items-center justify-center p-px rounded-full"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-[16px] h-[16px] text-[#90969D]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                    </svg>
                </div>
            </div>
            <div className={"mt-3"}>
                <div className={"flex items-center gap-2 w-full hover:bg-[#E4E6E9] pl-1 cursor-pointer h-[48px] rounded-lg"}>
                    <div className={"w-[36px] h-[36px] rounded-full overflow-hidden"}>
                        <img src="https://scontent.fsrg1-1.fna.fbcdn.net/v/t39.30808-1/297579949_100416456114671_869850798967648584_n.png?stp=cp0_dst-png_p50x50&_nc_cat=100&ccb=1-7&_nc_sid=05dcb7&_nc_eui2=AeF5Wmifk3o2RzDXkNS5J-O5Gman-t8OxQcaZqf63w7FB3XQSYZt4LXslqAV_IzSteRtPdZTCu3LL965TvCi9a_e&_nc_ohc=Y_vfbTlJBgoAX9QQWvg&tn=foDWZVGHpNLffpN7&_nc_ht=scontent.fsrg1-1.fna&oh=00_AT9NDUnuoS-LTa_k7Hir--Tq68fVPgLZpAbjUZu1UltnwQ&oe=6353745E" alt=""/>
                    </div>
                    <p className={"font-medium text-[#050505] text-sm"}>Doodle Art</p>
                </div>
                <div className={"flex items-center gap-2 w-full hover:bg-[#E4E6E9] pl-3 mt-2 cursor-pointer h-[30px] rounded-lg"}>
                    <div className={"w-[20px] h-[20px] flex items-center justify-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6 text-[#65676b]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/>
                        </svg>
                    </div>
                    <p className={"text-[#65676b] text-xs font-semibold"}>Beralih ke halaman</p>
                </div>
                <div className={"flex items-center gap-2 w-full hover:bg-[#E4E6E9] pl-3 mt-2 cursor-pointer h-[30px] rounded-lg"}>
                    <div className={"w-[20px] h-[20px] flex items-center justify-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6 text-[#65676b]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/>
                        </svg>
                    </div>
                    <p className={"text-[#65676b] text-xs font-semibold"}>Beralih ke halaman</p>
                </div>
                <div className={"h-[1px] bg-[#CED0D4] w-full mt-3"}>

                </div>
                <div className={"mt-3"}>
                    <p className={"text-[#65676b] text-base font-semibold"}>Ulang Tahun</p>
                    <div className={"mt-3 flex items-center gap-2"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6 text-[#EA2F5C]">
                            <path
                                d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z"/>
                        </svg>
                        <p className={"font-normal"}><span className={"font-semibold text-sm"}>Mittie V. Rodriguez</span> berulang tahun hari ini</p>
                    </div>
                </div>

                <div className={"h-[1px] bg-[#CED0D4] w-full mt-4"}>

                </div>

                <div className={"mt-3"}>
                    <div className={"mt-3 flex items-center justify-between gap-2"}>
                        <p className={"text-[#65676b] text-base font-semibold"}>Kontak</p>
                        <div className={"flex items-center gap-3"}>
                            <div className={"w-[24px] h-[24px] hover:bg-[#E4E6E9] flex items-center justify-center cursor-pointer rounded-full"}>
                                <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                                     className="b6ax4al1 text-[#65676B] m4pnbp5e somyomsx ahndzqod gnhxmgs4 eohcrkr5 akh3l2rg">
                                    <g fill-rule="evenodd" transform="translate(-448 -544)">
                                        <path
                                            d="M457.25 552.5H455v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25a.75.75 0 0 1 1.5 0V551h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 0 0-1.852-1.852l-8.796.002a1.854 1.854 0 0 0-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 0 0 1.852-1.851v-1.392l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601v-6.167c0-.26-.142-.49-.37-.602"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className={"w-[24px] h-[24px] hover:bg-[#E4E6E9] flex items-center justify-center cursor-pointer rounded-full"}>
                                <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em"
                                     className="b6ax4al1 text-[#65676B] m4pnbp5e somyomsx ahndzqod gnhxmgs4 eohcrkr5 akh3l2rg">
                                    <g fill-rule="evenodd" transform="translate(-448 -544)">
                                        <g fill-rule="nonzero">
                                            <path
                                                d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                                                transform="translate(448 544)"></path>
                                            <path
                                                d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                                                transform="translate(448 544)"></path>
                                            <path
                                                d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                                                transform="translate(448 544)"></path>
                                            <path
                                                d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                                                transform="translate(448 544)"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className={"w-[24px] h-[24px] hover:bg-[#E4E6E9] flex items-center justify-center cursor-pointer rounded-full"}>
                                <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em"
                                     className="b6ax4al1 text-[#65676B] m4pnbp5e somyomsx ahndzqod gnhxmgs4 dmdr2h6l kgzac55p">
                                    <g fill-rule="evenodd" transform="translate(-446 -350)">
                                        <path
                                            d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mt-3 relative"}>
                    <PeopleOnline name={"Caraka Sirait"} image={pictureDump1}/>
                    <PeopleOnline name={"Nilam Hastuti"} image={pictureDump2}/>
                    <PeopleOnline name={"Puspa Agustina"} image={pictureDump3}/>
                    <PeopleOnline name={"Halima Prastuti"} image={pictureDump4}/>
                    <PeopleOnline name={"Irsad Hidayat"} image={pictureDump5}/>
                    <PeopleOnline name={"Jane Riyanti"} image={pictureDump6}/>
                    <PeopleOnline name={"Nabila Nurdiyanti"} image={pictureDump7}/>
                    <PeopleOnline name={"Kezia Halimah"} image={pictureDump8}/>
                    <PeopleOnline name={"Suci Mayasari"} image={pictureDump9}/>
                    <PeopleOnline name={"Vicky Nasyidah"} image={pictureDump10}/>
                    <PeopleOnline name={"Intan Oktaviani"} image={pictureDump11}/>
                    <PeopleOnline name={"Anita Yuliarti"} image={pictureDump12}/>
                    <PeopleOnline name={"Anita Yuliarti"} image={pictureDump13}/>

                    <div style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'}} className={"fixed w-[48px] h-[48px] flex items-center justify-center bg-white rounded-full bottom-4 cursor-pointer right-4"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-[20px] h-[20px]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                        </svg>
                    </div>

                </div>

                <div className={"h-[2px] bg-[#CED0D4] w-full mt-3 mb-3"}>

                </div>

            </div>
        </div>
    )
}

export default RightNavbar;

