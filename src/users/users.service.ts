import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {


    private users: any[]= [
        {
            id: 1,
            name: 'Enrique Altuna',
            phone: '087123711231',
        },
        { 
            id: 2,
            name: 'Enrique Altuna',
            phone: '087123711231',
        }
    ]

    getUsers(){
        return this.users;
    }
    CreateUsers(user:CreateUsersDto){
         this.users.push(user);
        return {
            ...user,
            id: this.users.length + 1,
        };
    }
}
