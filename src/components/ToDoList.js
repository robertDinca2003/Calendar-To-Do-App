import { useContext } from "react";
import { useState } from "react";
import { Task } from "./ListTask";
import { AppContext } from "../App";

export const CreateToDoList = () => {

    const {toDoList,setToDoList, value} = useContext(AppContext);

    

    return(
        <div className="mx-[10%] min-h-screen mb-0">
           <div className="inline-flex justify-between w-full border-b-2 border-white mb-5 pb-1">
            <h1 className="text-white text-5xl font-bold  ">To Do List </h1>
            <h1 className="text-white text-5xl font-bold  ">
            {value.getDate()}/{value.getMonth()+1}/{value.getFullYear()}
            </h1>
            </div>
            <div className="grid grid-cols-1 gap-2">
                {toDoList.map((task)=>{
                    //console.log(task);
                    if(value.getDate() === task?.day
                        && (value.getMonth()+1) === task?.month
                        && value.getFullYear() === task?.year)
                        //console.log(task.hasOwnProperty('isCompleted'));
                        return <Task currTask = {task.title} currDescription = {task?.description} extended={task?.extended} isExtended={task?.isExtended} isCompleted={task?.isCompleted} id={task.id} />
                })}
            </div>
         </div>
    );

}