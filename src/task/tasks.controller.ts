 import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { Taskservice } from "./tesk.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
 
 @Controller('/tasks')
 export class TaskController { 
    taskService:Taskservice;
    constructor(taskService: Taskservice){
        this.taskService = taskService;
    }

    @Get()
    getAllTasks(@Query() query:any){
      console.log(query,'query')
      return this.taskService.getTasks();
    }
    @Get('/:id')
    getTask(@Param('id') id: string){ 
      console.log(id)
      return this.taskService.getTask(parseInt(id));
    }

    @Post()
    // @UsePipes(new ValidationPipe())
    postTasks(@Body() task:CreateTaskDto){
      console.log(task,'valor recibido')
      return this.taskService.postTasks(task);
    }
    @Put()
    putTask(@Body() task: UpdateTaskDto){
      return this.taskService.putTasks(task);
    }
    @Patch()
    pathTasks(){
      return this.taskService.patchTasks();
    }
    @Delete()
    deleteTasks(){
      return this.taskService.deleteTasks();
    }

 }