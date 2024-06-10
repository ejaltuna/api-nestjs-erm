import { Module } from "@nestjs/common";
import { TaskController } from "./tasks.controller";
import { Taskservice } from "./tesk.service";

@Module({
    controllers:[TaskController],
    providers:[Taskservice],
})
export class tasksModule {
}