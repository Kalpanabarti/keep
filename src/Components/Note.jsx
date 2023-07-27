import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import EditIcon from '@mui/icons-material/Edit';

const Note=(props)=>{
   const deleteNote=()=>{
      props.deleteItem(props.id)
   };
   // const editNote=()=>{
      // props.editItem(props.id)
   // };
   return(
      <>
         <div className="note">
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <button onClick={deleteNote}>
            <DeleteOutlineIcon className="deleteicon"/>
            </button>
            {/* <button onClick={editNote}> */}
            {/* <EditIcon className="editicon"/> */}
            {/* </button> */}
         </div>
      </>
   )
};
export default Note;