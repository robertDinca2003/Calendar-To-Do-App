import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import Calendar from "react-calendar";

export const CreateTask = () => {
        const {task, setTask, value, toDoList, setToDoList} = useContext(AppContext);

        const UpdateTitle = (event) => {
            setTask({...task, title: event.target.value});
            
        };

        const UpdateDescriprion = (event) => {
            setTask({...task, description: event.target.value});
            
        };

        const AddTask = () => {
            if(task?.title =='' || !task.hasOwnProperty('title') ){console.log(task?.title + ' ' +  !task.hasOwnProperty('title'));return;}
            //setTask(task => ({...task, isCompleted:false}));
            const newList = [...toDoList,task];
            const id = toDoList.length ? toDoList[toDoList.length-1]?.id+1 : 0 ;
            const extended = (task?.description === '' || !task.hasOwnProperty('description'))?false:true; 
            
            setToDoList(newList => ([...newList, {...task, id: id, extended:extended, isExtended: extended}]));
            
            //console.log(newList);
               
        };

        return (
            <div className="min-h-max mx-[10%] border-2 border-[#083b8b] bg-[#fff] rounded-3xl px-[5%] grid grid-cols-1 gap-[2%] pt-[3%] pb-[5%]">
                <h1 className="text-3xl font-bold text-[#666fff]">Create Task</h1>
                <h2 className="text-xl text-[#055ae4]">Title</h2>
                <input className="border-2 border-black rounded-md p-[1%] mx-[3%]" placeholder="Ex. Do homework" onChange = {UpdateTitle}/>
                <h2 className="text-lg text-[#055ae4]">Description</h2>
                <textarea className="resize-none border-2 border-black rounded-md mx-[3%] px-[1%] pb-20" name='description' placeholder="Ex. Learn the leson and solve the exercises" rows={5} onChange={UpdateDescriprion} />
                <button className=" mt-[3%] border-2 border-black w-1/5 justify-self-center rounded-lg hover:bg-[#666fff] hover:text-white" onClick={AddTask}>Add</button>

            </div>
        );
}