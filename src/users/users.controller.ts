import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';

@Controller({})
export class UsersController {
    
        constructor(private usersService: UsersService){ }

        @Get('/users')
        getUsers(){
           return this.usersService.getUsers();
        }

        @Post('/users')
        // @UsePipes(new ValidationPipe()) //para validar los cmpor desde cada controller
        createUser(@Body() user: CreateUsersDto){
                return this.usersService.CreateUsers(user);
        }
    
}
