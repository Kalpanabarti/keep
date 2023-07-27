import React, { useState } from "react";
import Button  from "@material-ui/core/Button";
import AddIcon from '@mui/icons-material/Add';


const CreateNote=(props)=>{
   const [expand,setExpand]= useState(false);
   const [note, SetNote] = useState({
      title:"",
      content:"",
   });

   const inputEvent=(event)=>{
      const {name,value}=event.target;//object destruction
      SetNote((prev)=>{
         return{
            ...prev,
            [name]:value,
         };
      });
      
   }
   const addEvent=()=>{
      props.passNote(note);
      SetNote({
         title:"",
         content:"",
      });
   };
   const expandIt=()=>{
      setExpand(true);
   };
   const backNormal=()=>{
      setExpand(false);
   };
   
   return(
      <>
        <div className="main_note" onDoubleClick={backNormal}>
         <form>
           {expand ? (
            <input type="text"  name="title" value={note.title} placeholder="Title" onChange={inputEvent}/>) :null}
            <textarea name="content" id="" cols="10" rows="3" value={note.content} onChange={inputEvent} onClick={expandIt} 
               placeholder="Write a note"></textarea>
            {expand? (
            <Button onClick={addEvent}>
               <AddIcon className="plus_sign"/>
            </Button>): null}
         </form>
        </div>

      </>
   );
};
export default CreateNote;