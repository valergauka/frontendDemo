import React from "react";
import './Programs.css';

const Program = (props) => {
    console.log(props.prog)
    return (
        <div >
                <div className="card">
                    <h2 className="cardTitleLarge"> {props.review.title}</h2>
                     <h3 className="cardTitleSmall">{props.review.title}</h3>
                    <p className="cardDescription">{props.review.text}</p> 
                </div>
           
        </div>
    );
}

export default Program;