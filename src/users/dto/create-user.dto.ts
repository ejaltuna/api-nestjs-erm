import { Max, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUsersDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()
    @IsNotEmpty()
    @Max(100)
    age:number;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email:string;
}