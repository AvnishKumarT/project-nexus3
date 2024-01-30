import React from "react";

export default function Card(props){
    return(
        <div class="card aboutUsCard">
            <img class="card-img-top cardImg" src={props.imgLink} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
}