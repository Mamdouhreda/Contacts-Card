import React from "react";
import ReactDOM  from "react-dom";


function Card(props){
    return(
<     div className="card">
        <div className="top">
          <h2 className="name">{props.fName}</h2>
          <img src={props.img}
            alt="avatar_img" className="circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.mobile}</p>
          <p className="info">{props.email}</p>
        </div>
      </div>


    );
}
export default Card;