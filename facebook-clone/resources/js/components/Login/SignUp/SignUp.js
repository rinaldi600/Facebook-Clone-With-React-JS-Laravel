import React, { useState } from "react";
import {closeNavbarSignUp} from '../../../features/showNavbarSignUp';
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
    const { register, handleSubmit, formState: { errors }, resetField } = useForm();
    const dispatch = useDispatch();
    const [errorsValidation, setErrors] = useState({});

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("username", data['username']);
        formData.append("name", data['name']);
        formData.append("email", data['email']);
        formData.append("photo_profile", data['photo_profile'][0]);
        formData.append("password", data['password']);
        axios.post('/sign_up_user', formData ,{
            headers: {
                'Content-Type': 'multipart/form-data',
              }
        }).then((response) => {
            if (response.data.hasOwnProperty('errors')) {
               setErrors(response.data.errors);
            } else {
                console.log(response);
                resetField('name');
                resetField('username');
                resetField('email');
                resetField('photo_profile');
                resetField('password');
            }
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <div className={"fixed inset-0 bg-[#FCFCFD]/75 flex items-center justify-center"}>
            <div className={"min-h-[521px] font-Helvetica mobile:w-[90%] overflow-hidden sm:w-[432px] bg-white shadow-lg rounded-lg"}>
                <div style={{borderBottom : '1px solid #DADDE1'}} className={"min-h-[82px] flex"}>
                    <div className={"pl-3 w-[50%]"}>
                        <p className={"font-semibold text-[32px]"}>Daftar</p>
                        <p className={"text-sm text-[#606770] -mt-1"}>Ini lebih cepat dan mudah</p>
                    </div>
                    <div className={"grid justify-end w-[50%] pr-2"}>
                        <svg  onClick={() => dispatch(closeNavbarSignUp())}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6 mt-2 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                </div>
                <div className="min-h-[439px] p-2">
                    <div className="pl-3 pt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register('name', { required: "Kolom wajib diisi"})} placeholder="Nama Lengkap" className="h-[40px] w-[90%] lg:w-[375px] p-2 border border-[#DDDFE2] rounded-lg outline-none focus:border-[#1B74E4]" />
                            <p className={"mt-1 text-red-600 text-xs"}>{errors.name?.message || errorsValidation?.name}</p>
                            <input type="text" {...register('username', {required: "Kolom wajib diisi"})} placeholder="Username" className="h-[40px] w-[90%] lg:w-[375px] p-2 border border-[#DDDFE2] mt-2 rounded-lg outline-none focus:border-[#1B74E4]" />
                            <p className={"mt-1 text-red-600 text-xs"}>{errors.username?.message || errorsValidation?.username}</p>
                            <input type="text" {...register('email', {required: "Kolom wajib diisi"})} placeholder="Email" className="h-[40px] w-[90%] lg:w-[375px] p-2 border border-[#DDDFE2] mt-2 rounded-lg outline-none focus:border-[#1B74E4]" />
                            <p className={"mt-1 text-red-600 text-xs"}>{errors.email?.message || errorsValidation?.email}</p>
                            <input type="password" {...register('password', {required: "Kolom wajib diisi"})} placeholder="Password" className="h-[40px] w-[90%] lg:w-[375px] p-2 border border-[#DDDFE2] mt-2 rounded-lg outline-none focus:border-[#1B74E4]" />
                            <p className={"mt-1 text-red-600 text-xs"}>{errors.password?.message || errorsValidation?.password}</p>
                            <input type="file" className="h-[40px] w-[90%] lg:w-[375px] p-2" {...register('photo_profile', {required: "Kolom wajib diisi"})} />
                            <p className={"mt-1 text-red-600 text-xs"}>{errors['photo_profile']?.message || errorsValidation?.photo_profile}</p>

                            <div className="w-[95%] text-[11px] mt-3 text-[#777777]">
                                <p>
                                    Orang yang menggunakan layanan kami dapat mengunggah informasi kontak Anda ke Facebook. <a className="text-[#385898]" href="#">Pelajari selengkapnya</a>
                                </p>
                                <p>
                                    Dengan mengklik Daftar, Anda menyetujui <a className="text-[#385898]" href="">Ketentuan, Kebijakan Privasi,</a> dan <a href="" className="text-[#385898]">Kebijakan Cookie</a> kami. Anda akan menerima Notifikasi SMS dari kami dan bisa berhenti kapan saja.
                                </p>
                            </div>
                            <div className="w-full grid justify-items-center mt-3">
                                <button type="submit" className="lg:w-[194px] text-center text-white bg-[#00A400] hover:bg-[#699B5C] text-lg font-bold rounded-lg w-[90%] h-[36px]">
                                    Daftar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
