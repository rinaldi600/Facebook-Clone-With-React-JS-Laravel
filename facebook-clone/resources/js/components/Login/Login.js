import React from "react";

function Login() {
    return (
          <div className={"min-h-[900px]"}>
              <div className={"min-h-[750px] grid justify-items-center items-center"} style={{backgroundColor : 'rgb(240,242,245)'}}>
                <div className={"min-h-[400px] w-[90%] flex flex-wrap"}>
                    <div className={"w-full sm:w-[50%] bg-red-200 min-h-full grid content-center justify-end mx-auto p-2"}>
                        <div className="sm:w-5/5 sm:h-fit">
                            <img class="sm:w-[301px] sm:h-[106px]" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
                            <div className="sm:w-4/5">
                                <p className={"text-2xl font-Helvetica"}>
                                    Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"bg-green-400 w-full sm:w-[50%] min-h-full"}>
                        <div>

                        </div>
                    </div>
                </div>
              </div>
              <div className={"min-h-[150px] bg-red-300"}>

              </div>
          </div>
    );
}

export default Login;
