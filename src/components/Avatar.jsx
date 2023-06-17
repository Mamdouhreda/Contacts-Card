import React from "react";
import  ReactDOM  from "react-dom";

function Avatar(props){
    return(
        <img src={props.img}
            alt="avatar_img" className="circle-img"
          />
    )
}

export default Avatar;