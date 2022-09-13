import React, {useState} from "react";
import Footer from "./Footer/FooterComponent";
import { useSelector, useDispatch } from 'react-redux'
import {showNavbarSignUp} from '../../features/showNavbarSignUp';
import SignUp from "./SignUp/SignUp";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {

    const toogle = useSelector((state) => state.showNavbarSlice.value);
    const [loading, setLoading] = useState(false);
    const [errorsValidation, setErrors] = useState({});
    const dispatch = useDispatch();
    const { register, handleSubmit, resetField, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('email_username', data['email_username']);
        formData.append('password', data['password']);
        axios.post('/sign_in_user', formData)
            .then((response) => {
                setLoading(true);
                if (response.data.hasOwnProperty('errors')) {
                    setErrors(response.data.errors);
                } else {
                    console.log(response);
                    resetField('email_username');
                    resetField('password');
                }
            })
            .catch((error) => {
                setLoading(true);
                console.log(error);
            })
            .finally(() => setLoading(false));


    };

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid justify-items-center mx-auto font-Helvetica">
                                    <input {...register('email_username', {required: 'Kolom wajib diisi'})} className={"mt-3 w-[90%] rounded-lg focus:border-[#1B74E4] p-2 lg:w-[360px] h-[50px] bg-[#E8F0FE] border border-[#DDDFE2] outline-none"} type="text" placeholder="Email atau Username"/>
                                    <p className={"mt-1 text-red-600 text-xs"}>{errors.email_username?.message || errorsValidation?.email_username}</p>
                                    <input {...register('password', {required: 'Kolom wajib diisi'})} className={"mt-3 w-[90%] p-2 rounded-lg focus:border-[#1B74E4] lg:w-[360px] h-[50px] bg-[#E8F0FE] border border-[#DDDFE2] outline-none"} type="password" placeholder="Kata Sandi"/>
                                    <p className={"mt-1 text-red-600 text-xs"}>{errors.password?.message || errorsValidation?.password}</p>
                                    <button type={"submit"} className={`${loading ? 'cursor-not-allowed' : ''} font-bold text-xl hover:bg-[#166FE5] w-[90%] lg:w-[360px] h-[50px] text-white bg-[#1877F2] rounded-lg mt-3`}>Masuk</button>
                                    <div className="w-[90%] border border-white border-b-[#DADDE1] lg:w-[360px] h-[50px]">
                                        <p className="text-[#1877F2] text-center mt-3">Lupa Kata Sandi</p>
                                    </div>
                                    <button onClick={() => dispatch(showNavbarSignUp())} className={`font-bold text-sm hover:bg-[#36A420] w-[80%] lg:w-[127.825px] h-[50px] text-white bg-[#42B72A] rounded-lg mt-4`}>Buat Akun Baru</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
              { toogle ? <SignUp/> : '' }
              <div className={"min-h-[150px]"}>
                <Footer/>
              </div>
          </div>
    );
}

export default Login;
