import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

 
 
 @Injectable()
 export class Taskservice {
    private task = [];


    getTasks() {
        return this.task;
    }
    getTask(id: number) {
        const taskFound = this.task.find(task => task.id === id);
         if(!taskFound){  //validacion del param
            return new NotFoundException(`Task with id ${id} not Found`);

            // return 'No se encontro la tarea'
            // throw new Error ('Task not found');
         }


        return taskFound;
    }
    postTasks(task:CreateTaskDto){
        console.log(task, 'task en service')
        this.task.push({
            ...task,
            id: this.task.length + 1,
        })
        return task;
    }
    putTasks(task:UpdateTaskDto){
        console.log(task,'e service')
        return 'actualizando tarea'
    }
    deleteTasks(){
        return 'eliminando tarea'
    }
    patchTasks(){
        return 'actualizando el estadod e una tarea'
    }
 }