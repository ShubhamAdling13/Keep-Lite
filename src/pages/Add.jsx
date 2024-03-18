import { Link, redirect } from "react-router-dom";
import "./Add.css"
import notes from "../components/Notes";

function Add(){
    function addnote(e){
      e.preventDefault();
        var a=    document.querySelector("#tite").value;
        var b= document.querySelector("#cont").value ;
        
        let len = notes.length;
      
        let lastkey = notes[len-1].key ;
        let newkey = lastkey+1 ;
        

        const newobj = {
           id:newkey ,
           title : a ,
           content : b 

        }
        console.log(newobj);
        notes.push(newobj);
        redirect("/");

    }
    return(<>
            
      <div className="container">
        
       <div>  <input name="title" id="tite" placeholder="Enter Title"/></div>
       <div><textarea  name="content" id="cont" rows="5" placeholder="Enter Description" maxLength=" 25" /></div>
       <div><button onClick={addnote}><Link to="/"> Submit </Link></button></div>
       
      </div>
     
    
    </>)
}

export default Add;