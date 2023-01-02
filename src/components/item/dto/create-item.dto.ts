import { IsArray, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateItemDto {
    @IsNotEmpty()
    @IsString()
    itemName: string;

    @IsNotEmpty()
    @IsNumber()
    cost: number;

    @IsEmail()
    @IsNotEmpty()
    userEmail: string;
}
