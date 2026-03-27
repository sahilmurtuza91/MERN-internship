import React from "react";
import "./usercard.css"
const UserCard = (props)=>{
    return(
        <div className="user-container">
            <p id="user-name">{props.name}</p>
            <img className="user-img" src={props.image} alt="" />
            <p className="user-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    )
}
export default UserCard