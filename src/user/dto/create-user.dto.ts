import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    email:string;

    @IsString()
    name:string;

    @IsStrongPassword({
        minLength: 5,
        minLowercase: 1,
        minNumbers : 1,
        minSymbols: 1,
        minUppercase: 1
    })
    password:string;
}