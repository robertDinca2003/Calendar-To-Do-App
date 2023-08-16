import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Task = (props) => {

    const {toDoList,setToDoList} = useContext(AppContext);

    const UpdateCompleted = (id) => {
        
        setToDoList(toDoList.map( (task) =>{if(task?.id === id)return({...task, isCompleted:true});else return task;}));
        
      
    };

    const UpdateDeleted = (id) => {
        setToDoList(toDoList.filter((task)=>task?.id !==id));
    };

    const UpdateExtend = (id) =>{
        setToDoList(toDoList.map( (task) =>{if(task?.id === id){console.log(task.isExtended);return({...task, isExtended:!task?.isExtended});}else return task;}));
        
    }

    return(
        <div>
        <div className={`py-1.5 inline-flex justify-between ${props?.isCompleted ? 'bg-[#02b520]':'bg-[#0a429c]'} ${!props?.isExtended ?'rounded-lg': 'rounded-t-lg'} w-full text-white px-[5%]`}>
            <div className="inline-flex justify-between items-start">
            
            <h1 className="pr-5 whitespace-pre-wrap">{props.currTask.replace(/.{30}/g, '$&\n')}</h1>
            {props?.extended &&<button onClick={() =>UpdateExtend(props.id)} className={` align-top ${!props?.isCompleted ? 'text-emerald-400':'text-[#0a429c]'} ${!props?.isCompleted ? 'hover:text-green-300':'hover:text-[#357ef5]'}`}>{props?.isExtended?'More':'Less'}</button>} 
            </div>
            
            <div className="inline-flex items-start justify-between">
            {!props.isCompleted &&<button onClick={()=>UpdateCompleted(props.id)} className="text-emerald-400 mr-4 hover:text-green-300">Complete</button>}
            <button onClick={()=>UpdateDeleted(props.id)} className="text-red font-bold text-red-600 hover:text-red-700">X</button>
            
            </div>
         </div>
         {props?.isExtended &&<div className="">
            <h1 className={`pt-1 whitespace-pre-wrap px-[8%] text-white ${props?.isCompleted ? 'bg-[#02b520]':'bg-[#0a429c]'} rounded-b-lg`}>
                {props.currDescription}
            </h1>
         </div>}
        </div>
        
    );
} ;