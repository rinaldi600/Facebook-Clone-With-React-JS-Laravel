import React from "react";
import Footer from "./Footer/FooterComponent";

function Login() {
    return (
          <div className={"min-h-[900px]"}>
              <div className={"min-h-[750px] p-0.5 grid justify-items-center items-center"} style={{backgroundColor : 'rgb(240,242,245)'}}>
                <div className={"min-h-[400px] w-[90%] flex flex-wrap"}>
                    <div className={"w-full sm:w-[50%] min-h-full grid content-center justify-end mx-auto p-2"}>
                        <div className="sm:w-5/5 sm:h-fit">
                            <img class="sm:w-[301px] sm:h-[106px]" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
                            <div className="sm:w-4/5">
                                <p className={"text-2xl font-Helvetica"}>
                                    Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"w-full sm:w-[50%] grid mobile:justify-items-center sm:justify-items-center lg:justify-start content-center min-h-full"}>
                        <div className={"lg:w-[396px] w-[95%] shadow-2xl h-[350px] bg-white lg:ml-3 rounded-xl"}>
                            <div className="grid justify-items-center font-Helvetica">
                                <input className={"mt-3 w-[90%] rounded-lg focus:border-[#1B74E4] p-2 lg:w-[360px] h-[50px] bg-[#E8F0FE] border border-[#DDDFE2] outline-none"} type="text" placeholder="Email atau Username"/>
                                <input className={"mt-3 w-[90%] p-2 rounded-lg focus:border-[#1B74E4] lg:w-[360px] h-[50px] bg-[#E8F0FE] border border-[#DDDFE2] outline-none"} type="text" placeholder="Kata Sandi"/>
                                <button className="font-bold text-xl hover:bg-[#166FE5] w-[90%] lg:w-[360px] h-[50px] text-white bg-[#1877F2] rounded-lg mt-3">Masuk</button>
                                <div className="w-[90%] border border-white border-b-[#DADDE1] lg:w-[360px] h-[50px]">
                                    <p className="text-[#1877F2] text-center mt-3">Lupa Kata Sandi</p>
                                </div>
                                <button className="font-bold text-sm hover:bg-[#36A420] w-[80%] lg:w-[127.825px] h-[50px] text-white bg-[#42B72A] rounded-lg mt-4">Buat Akun Baru</button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div className={"min-h-[150px]"}>
                <Footer/>
              </div>
          </div>
    );
}

export default Login;
