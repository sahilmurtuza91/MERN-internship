import React  from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user, setUser] = React.useState(null); // This is used to store the user data and it will be passed to the provider component and it will be available to all the components that are wrapped inside the provider component

    return(
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;