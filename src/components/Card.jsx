import React from "react";
import ReactDOM  from "react-dom";
import Avatar from "./Avatar";
import Detail from "./Detail";


function Card(props){
    return(
<     div className="card">
        <div className="top">
          <h2 className="name">{props.fName}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
            <Detail detailInfo={props.mobile} />
            <Detail detailInfo={props.email} />
        </div>
      </div>


    );
}
export default Card;