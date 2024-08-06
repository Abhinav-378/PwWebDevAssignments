import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Cards() {
    const [userDataList, setUserDataList] = useState([]);
    async function downData() {
        try {
            const response = await axios.get('https://api.github.com/users');
            const resData = response.data;
            const list = resData.map((data) => {
                return {
                    id: data.id,
                    user: data.login,
                    profile: data.avatar_url
                }
            });
            setUserDataList(list)
            console.log(list);
            console.log(userDataList);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        downData()
    }, [])
    return (
        <>
            <div className='flex flex-wrap gap-5'>
                {userDataList.map(user => (
                    <div key={user.id} className='relative h-72 w-72'>
                        <img src={user.profile} alt={`${user.user}'s avatar`} className='h-72 w-72 rounded-xl' />
                        <p className='bg-white text-black absolute bottom-2 left-2 p-1 rounded-lg'>{user.user}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cards
