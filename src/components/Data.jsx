import React from "react";
import notes from "./Notes";
import { Link } from "react-router-dom";

function Data() {
    const info = notes ;

    function dele(key){
        let currentkey = key ;
       let indexofkey = notes.findIndex((obj) => obj.key == currentkey);
       notes.splice(indexofkey,1);
      console.log("clicked");
       console.log(key);
    }

  return (<> 

  
 { info.map((item,index) => (

 
    <div className="note" key={index}>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
      <p><button onClick={()=>{dele(item.key)}}> <Link to="/"> Delete </Link></button></p>
    </div>
  
  ) ) }
  
  </>);
}

export default Data;