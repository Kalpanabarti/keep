import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";

const getLocalItem=()=>{
   let list=localStorage.getItem('lists');
   if(list){
      return JSON.parse(localStorage.getItem('lists'));
   }else{
      return [];
   }
}

const App =()=>{
   const [addItem, setAddItem] = useState(getLocalItem());
   
   const addNote=(note)=>{
      setAddItem((prevData)=>{
         return[...prevData,note];
      });

   };

   const onDelete=(id)=>{
      setAddItem((prev)=>
         prev.filter((curr,ind)=>{
            return ind !== id;
         })
      );
   };

   //const onEdit=(id)=>{
     // let edit= addItem.find((curr,ind)=>{
       //  return ind === id
      //});
     // console.log(edit);
   //}
   useEffect(()=>{
      localStorage.setItem('lists', JSON.stringify(addItem))
   },[addItem]);
   return(
      <>
         <Header/>
         <CreateNote
            passNote={addNote}
         />
         {addItem && addItem.map((val,index)=>{
               return <Note
                  key={index}
                  id={index}
                  title={val.title}
                  content={val.content}
                  deleteItem={onDelete}
                  //editItem={onEdit}
                />
            })}
         <Footer/>
      </>
   )
};
export default App;