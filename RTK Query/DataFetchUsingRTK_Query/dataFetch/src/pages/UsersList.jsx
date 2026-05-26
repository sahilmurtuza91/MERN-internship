import React from 'react'
import { FaUsersLine } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { useNavigate } from 'react-router-dom'
import { useGetUserDataQuery } from "../services/apiSlice"

function UsersList() {
    const navigate = useNavigate();
    const { data: users, isLoading, isError, error, isFetching } = useGetUserDataQuery();

    return (
        <div className="bg-black h-screen overflow-hidden">
            <div className="bg-slate-900/90 backdrop-blur-xl w-full h-full py-10">
                <div className="w-130 h-full m-auto flex flex-col justify-center rounded-2xl border border-white/10  bg-blue-600/20  overflow-hidden">
                    <div className='bg-blue-900/30 w-full  rounded-tl-2xl rounded-tr-2xl flex  justify-between px-4 '>
                        <div>
                            <div className='flex items-center gap-4'>
                                <FaUsersLine className='text-white rounded-full w-14 h-14  ' />
                                <h2 className='text-white font-semibold text-3xl'>Users</h2>
                            </div>
                            <span className='text-sm text-gray-300 -mt-1 block mb-4'>All users from JSONPlaceholder</span>
                        </div>
                        <div className='text-white '> search bar box  </div>
                    </div>

                    {/* USer list */}
                    <div className='flex-1 overflow-y-auto scrollbar-hide'>
                        {
                            isLoading ? (<h1 className='text-gray-300 flex justify-center'>loading...</h1>) : isError ? (
                                <h1 className='text-red-400 p-4'>Something went wrong</h1>
                            ) : (
                                users?.map((user) => (
                                    <div
                                        key={user.id}
                                        className=' flex gap-5 m-3 items-center rounded-2xl border border-white/10 p-3 bg-blue-900/10'
                                        onClick={() => navigate(`/users/${user.id}`)}
                                    >
                                        <div>
                                            <FaUserLarge className='w-12 h-12 rounded-full bg-purple-200/50 text-blue-800 p-2' />
                                        </div>
                                        <div className='flex items-center justify-between w-full'>
                                            <div>
                                                <h3 className=' text-white text-lg'>{user.name}</h3>
                                                <p className='text-white/60 text-sm'>{user.username}</p>
                                                <span className='flex items-center gap-1.5 text-gray-400 '> <MdEmail /> {user.email}</span>
                                            </div>
                                            <div>
                                                <MdKeyboardArrowRight className='text-gray-400 h-10 w-10' />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UsersList