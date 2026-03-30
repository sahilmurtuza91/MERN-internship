import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'


function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const { setUser } = useContext(UserContext); // This is used to get the setUser function from the context and it will be used to set the user data in the context and it will be available to all the components that are wrapped inside the provider component

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password }) // this is the function that will be used to set the user data in the context and it will be available to all the components that are wrapped inside the provider component
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder='Username' />
            {"  "}
            <input type="text"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder='passoword' />
            {"  "}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
 
export default Login