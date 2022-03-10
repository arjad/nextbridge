import React from 'react';
import { useParams} from "react-router-dom";

export const SingleMovie=({title,description,index,onEdit})=>{
   const params = useParams();
   console.log(params)
   return(
   <div className="card m-3" style={{height:"400px",width: "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <button  className="btn btn-success m-2" onClick={()=>onEdit(index)}>Edit</button>
      <button  className="btn btn-danger m-2">Delete</button>
    </div>
  </div>)
};