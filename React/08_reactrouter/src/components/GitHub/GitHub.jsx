import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
    const data = useLoaderData();
    // const [data, setdata] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/sahilmurtuza91")
    //         .then(reponse => reponse.json())
    //         .then(data => {
    //             setdata(data);
    //         })
    // }, [])
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl py-3'>Github followers:{data.followers}
                <img src={data.avatar_url} alt="Avatar" width={300} />
            </div>
        </div>
    )
}

export default GitHub

export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/sahilmurtuza91")
    return response.json()
}