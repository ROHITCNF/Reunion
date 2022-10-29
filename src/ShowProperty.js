import React from "react";
import "./ShowProperty.css";

function ShowProperty({key,type,location,price,image}){
console.log(type,location,price,image);
return(
  <article>
   <img className="photo" src={image} />
    <div className="description">
    <header>
       <p>{type}</p>
      <p>{location}</p>
    </header>
      <p>{price}</p>  
    </div>
  </article>
      
);
    
}

export default ShowProperty;