import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetUserDataByIdQuery } from "../services/apiSlice";
import { FaArrowLeft } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbNetwork } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { SiMockserviceworker } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";

function UserDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const { data: user, isLoading, isError, } = useGetUserDataByIdQuery(id);

    return (
        <div className="bg-black h-screen overflow-hidden">
            <div className="bg-slate-900/90 backdrop-blur-xl w-full h-full py-10">
                <div className="w-130 h-full m-auto flex flex-col  rounded-2xl border border-white/10  bg-blue-600/20  overflow-hidden">
                    <div className='bg-blue-900/30 w-full  rounded-tl-2xl rounded-tr-2xl flex  justify-between px-4 '>
                        <div className="h-20 flex  ">
                            <div
                                onClick={() => navigate(-1)}
                                className='flex items-center gap-4'>
                                <FaArrowLeft className='text-white rounded-full w-10 h-10  ' />
                                <h2 className='text-white font-semibold text-3xl'>Back to Users</h2>
                            </div>

                        </div>

                    </div>

                    <div className='flex-1 overflow-y-auto scrollbar-hide'>
                        {
                            isLoading ? (<h1 className='text-gray-300 flex justify-center'>loading...</h1>) : isError ? (
                                <h1 className='text-red-400 p-4'>Something went wrong</h1>
                            ) : (
                                <div className='  rounded-2xl border border-white/10 p-3 bg-blue-900/10 m-5'>
                                    <div className="flex gap-5 m-3 items-center">
                                        <div>
                                            <FaUserLarge className='w-20 h-20 rounded-full bg-purple-200/50 text-blue-800 p-2' />
                                        </div>
                                        <div className='flex items-center justify-between w-full'>
                                            <div>
                                                <h3 className=' text-white text-3xl'>{user.name}</h3>
                                                <p className='text-white/60 text-md'>{user.username}</p>
                                                <p className='flex items-center gap-1.5 text-gray-400 text-md'>  <MdEmail />{user.email}</p>
                                                <p className="flex items-center gap-1.5 text-gray-400 text-md"><BiSolidPhoneCall /> {user.phone}</p>
                                                <p className="flex items-center gap-1.5 text-gray-400 text-md"><TbNetwork /> {user.website}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-white font-semibold flex items-center pl-3 gap-2"><FaLocationDot />Address</h3>

                                            <div className="bg-blue-800/10 text-white/80 text-sm rounded-2xl border border-white/10 p-3 ml-4">
                                                <p>{user.address.street}, {user.address.suite}</p>
                                                <p>{user.address.city}, {user.address.zipcode}</p>
                                                <p>lat: {user.address.geo.lat}, lng: {user.address.geo.lng}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-white font-semibold flex items-center pl-3 gap-2"><SiMockserviceworker />Company</h3>

                                            <div className="bg-blue-800/10 text-white/80 text-sm rounded-2xl border border-white/10 p-3 ml-4">
                                                <p className="text-lg text-white font-semibold underline">{user.company.name}</p>
                                                <p>{user.company.catchPhrase}</p>
                                                <p>{user.company.bs}</p>
                                            </div>
                                        </div>
                                        <h3 className="text-white font-semibold flex items-center pl-3 gap-2"><FaInfoCircle />More Info</h3>

                                        <div className="flex  gap-15 text-gray-400 pl-4">
                                            <div>
                                                <p>Username</p>
                                                <p>Email</p>
                                                <p>Phone</p>
                                                <p>Website</p>
                                            </div>
                                            <div>
                                                <p>{user.username}</p>
                                                <p>{user.email}</p>
                                                <p>{user.phone}</p>
                                                <p>{user.website}</p>
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>



                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;