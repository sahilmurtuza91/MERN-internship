import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
    const {user} = useContext(UserContext); // This is used to get the user data from the context and it will be available to all the components that are wrapped inside the provider component and this can help to assces the data

    if(!user) return <div>Please login first</div>
    return<div>Welcome {user.username}</div>
        
}

export default Profile